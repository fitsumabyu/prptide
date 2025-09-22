
import { createContext, useState, useContext, ReactNode } from "react";
import { Product } from "@/data/protidelabproducts-db";
import { toast } from "sonner";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (productId: string, quantity?: number) => Promise<void>;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = async (productId: string, quantity = 1) => {
    try {
      // Fetch product from database
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      const response = await fetch(`${baseUrl}/api/products?id=${productId}`);
      if (!response.ok) {
        toast.error("Failed to add product to cart");
        return;
      }
      const product: Product = await response.json();

      setItems(prevItems => {
        const existingItem = prevItems.find(item => item.product.id === productId);
        
        if (existingItem) {
          toast.success(`Updated quantity of ${product.name} in cart`);
          return prevItems.map(item => 
            item.product.id === productId 
              ? { ...item, quantity: item.quantity + quantity } 
              : item
          );
        } else {
          toast.success(`Added ${product.name} to cart`);
          return [...prevItems, { product, quantity }];
        }
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error("Failed to add product to cart");
    }
  };

  const removeFromCart = (productId: string) => {
    setItems(prevItems => {
      const filtered = prevItems.filter(item => item.product.id !== productId);
      toast.info(`Removed item from cart`);
      return filtered;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems(prevItems => 
      prevItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.info("Cart cleared");
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  const totalPrice = items.reduce((sum, item) => {
    // Database returns price as "1500 kr" format
    const price = parseFloat(item.product.price.replace(" kr", "").replace("$", ""));
    return sum + (price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
