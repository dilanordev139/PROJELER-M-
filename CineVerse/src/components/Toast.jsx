import React from "react";
import { CheckCircle, Info, Star } from "lucide-react";

export default function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast ${toast.type}`}>
          {toast.type === "success" && <CheckCircle size={18} />}
          {toast.type === "info" && <Info size={18} />}
          {toast.type === "gold" && <Star size={18} fill="#f5c518" stroke="#f5c518" />}
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
