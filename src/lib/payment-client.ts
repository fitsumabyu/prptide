/**
 * Frontend Payment Client
 * Utility functions for making payment requests from the frontend
 */

export interface PaymentRequest {
  amount: number;
  currency?: string;
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

export class PaymentClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  }

  private async makeRequest(endpoint: string, data: any): Promise<PaymentResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      return result;
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

  async authorizePayment(request: PaymentRequest): Promise<PaymentResponse> {
    return this.makeRequest('/payments/authorize', request);
  }

  async capturePayment(transactionId: string, amount?: number): Promise<PaymentResponse> {
    return this.makeRequest('/payments/capture', { transactionId, amount });
  }

  async refundPayment(transactionId: string, amount?: number, reason?: string): Promise<PaymentResponse> {
    return this.makeRequest('/payments/refund', { transactionId, amount, reason });
  }

  // Helper function to format amount for display
  formatAmount(amountInCents: number, currency: string = 'USD'): string {
    const amount = amountInCents / 100;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  }

  // Helper function to validate card number (basic Luhn algorithm)
  validateCardNumber(cardNumber: string): boolean {
    const cleaned = cardNumber.replace(/\D/g, '');
    if (cleaned.length < 13 || cleaned.length > 19) return false;

    let sum = 0;
    let isEven = false;

    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned[i]);

      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 === 0;
  }

  // Helper function to get card brand from number
  getCardBrand(cardNumber: string): string {
    const cleaned = cardNumber.replace(/\D/g, '');
    
    if (cleaned.startsWith('4')) return 'visa';
    if (cleaned.startsWith('5') || cleaned.startsWith('2')) return 'mastercard';
    if (cleaned.startsWith('3')) return 'amex';
    if (cleaned.startsWith('6')) return 'discover';
    
    return 'unknown';
  }
}

// Export a default instance
export const paymentClient = new PaymentClient();
