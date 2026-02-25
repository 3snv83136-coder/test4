import { ReactNode } from 'react';
import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AlertBlockProps {
  type?: 'info' | 'warning' | 'success' | 'error';
  title: string;
  children: ReactNode;
  className?: string;
}

export function AlertBlock({ type = 'info', title, children, className }: AlertBlockProps) {
  const styles = {
    info: 'bg-brand-50 border-brand-200 text-brand-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    error: 'bg-red-50 border-red-200 text-red-900',
  };

  const icons = {
    info: <Info className="w-5 h-5 text-brand-600" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-600" />,
    success: <CheckCircle className="w-5 h-5 text-emerald-600" />,
    error: <XCircle className="w-5 h-5 text-red-600" />,
  };

  return (
    <div className={cn('border rounded-lg p-4 my-6 flex gap-4', styles[type], className)}>
      <div className="shrink-0 mt-0.5">{icons[type]}</div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <div className="text-sm opacity-90 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
