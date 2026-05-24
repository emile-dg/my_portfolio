import {cva, type VariantProps} from "class-variance-authority";

export const buttonVariants = cva(
    "flex items-center justify-center rounded-lg transition-all active:scale-90 outline-hidden active:ring-3",
    {
        variants: {
            variant: {
                link: "underline",
                default: "bg-primary text-white hover:bg-primary-700 focus:ring-primary",
                outline: "border border-primary text-primary bg-transparent",
                danger: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-600",
                warning: "text-white bg-orange-600 hover:bg-orange-700 focus:ring-orange-600",
            },
            size: {
                sm: "text-sm px-2 py-1 gap-1",
                md: "text-md px-4 py-2 gap-2",
                lg: "text-xl px-4 py-2 gap-4",
            }
        },
        defaultVariants: {
            size: "md",
            variant: "outline",
        }
    },
);


export type ButtonVariants = VariantProps<typeof buttonVariants>;