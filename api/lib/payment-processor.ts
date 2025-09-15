import { createHmac, timingSafeEqual } from 'crypto';
import { v4 as uuidv4 } from 'uuid';

export interface PaymentRequest {
  amount: number;
  currency: string;
  merchantAccount: string;
  reference: string;
  card?: {
    number: string;
    expiryMonth: string;
    expiryYear: string;
    cvc: string;
    holderName: string;
  };
  token?: string;
  capture?: boolean;
  threeDS?: {
    returnUrl: string;
    deviceData?: string;
  };
  billingAddress?: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  customer?: {
    email: string;
    firstName: string;
    lastName: string;
  };
}

export interface PaymentResponse {
  success: boolean;
  transactionId?: string;
  status?: string;
  threeDSAction?: {
    type: string;
    url: string;
    data: any;
  };
  error?: {
    code: string;
    message: string;
  };
}

export class PaymentProcessor {
  private apiKey: string;
  private merchantId: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = process.env.PROCESSOR_API_KEY || '';
    this.merchantId = process.env.PROCESSOR_MERCHANT_ID || '';
    this.baseUrl = process.env.PROCESSOR_BASE_URL || 'https://api.yourprocessor.com/v1';
  }

  private generateIdempotencyKey(): string {
    return uuidv4();
  }

  private createHeaders(idempotencyKey: string): HeadersInit {
    return {
      'Authorization': `Bearer ${this.apiKey}`,
      'Idempotency-Key': idempotencyKey,
      'Content-Type': 'application/json',
    };
  }

  async authorizePayment(request: PaymentRequest): Promise<PaymentResponse> {
    const idempotencyKey = this.generateIdempotencyKey();
    
    const payload = {
      amount: request.amount,
      currency: request.currency,
      merchantAccount: request.merchantAccount,
      reference: request.reference,
      capture: request.capture || false,
      ...(request.card && { card: request.card }),
      ...(request.token && { token: request.token }),
      ...(request.threeDS && { threeDS: request.threeDS }),
      ...(request.billingAddress && { billingAddress: request.billingAddress }),
      ...(request.customer && { customer: request.customer }),
    };

    try {
      const response = await fetch(`${this.baseUrl}/payments/authorize`, {
        method: 'POST',
        headers: this.createHeaders(idempotencyKey),
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: {
            code: data.error?.code || 'AUTHORIZATION_FAILED',
            message: data.error?.message || 'Payment authorization failed',
          },
        };
      }

      return {
        success: true,
        transactionId: data.transactionId,
        status: data.status,
        threeDSAction: data.threeDSAction,
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'NETWORK_ERROR',
          message: error instanceof Error ? error.message : 'Network error occurred',
        },
      };
    }
  }

  async capturePayment(transactionId: string, amount?: number): Promise<PaymentResponse> {
    const idempotencyKey = this.generateIdempotencyKey();
    
    const payload = {
      transactionId,
      ...(amount && { amount }),
    };

    try {
      const response = await fetch(`${this.baseUrl}/payments/capture`, {
        method: 'POST',
        headers: this.createHeaders(idempotencyKey),
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: {
            code: data.error?.code || 'CAPTURE_FAILED',
            message: data.error?.message || 'Payment capture failed',
          },
        };
      }

      return {
        success: true,
        transactionId: data.transactionId,
        status: data.status,
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'NETWORK_ERROR',
          message: error instanceof Error ? error.message : 'Network error occurred',
        },
      };
    }
  }

  async refundPayment(transactionId: string, amount?: number, reason?: string): Promise<PaymentResponse> {
    const idempotencyKey = this.generateIdempotencyKey();
    
    const payload = {
      transactionId,
      ...(amount && { amount }),
      ...(reason && { reason }),
    };

    try {
      const response = await fetch(`${this.baseUrl}/payments/refund`, {
        method: 'POST',
        headers: this.createHeaders(idempotencyKey),
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: {
            code: data.error?.code || 'REFUND_FAILED',
            message: data.error?.message || 'Payment refund failed',
          },
        };
      }

      return {
        success: true,
        transactionId: data.transactionId,
        status: data.status,
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'NETWORK_ERROR',
          message: error instanceof Error ? error.message : 'Network error occurred',
        },
      };
    }
  }

  verifyWebhookSignature(payload: string, signature: string): boolean {
    const webhookSecret = process.env.PROCESSOR_WEBHOOK_SECRET || '';
    const expectedSignature = createHmac('sha256', webhookSecret)
      .update(payload)
      .digest('hex');
    
    return timingSafeEqual(
      Buffer.from(signature, 'hex'),
      Buffer.from(expectedSignature, 'hex')
    );
  }
}
