import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('vi-VN').format(value) + ' đ';
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('vi-VN').format(value);
}

export function formatMillions(value: number): string {
  const millions = value / 1000000;
  return millions.toFixed(1) + ' Triệu';
}

export function formatThousands(value: number): string {
  const thousands = value / 1000;
  return thousands.toFixed(1) + ' K';
}

export function formatCurrencyFull(value: number): string {
  return new Intl.NumberFormat('vi-VN').format(value) + ' đ';
}

export function formatAxisValue(value: number): string {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + ' Tr';
  }
  if (value >= 1000) {
    return (value / 1000).toFixed(0) + 'K';
  }
  return value.toString();
}
