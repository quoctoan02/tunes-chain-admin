import React, { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

export interface ButtonProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const ImagePrimary = forwardRef<HTMLButtonElement, ButtonProps>(({ className, src, alt, ...props }, ref) => {
    return (
        <div
            className={twMerge(
                `
          relative 
          aspect-square 
          h-full
          w-full 
          overflow-hidden 
          rounded-md
        `,
                className,
            )}
        >
            <img
                className="absolute inset-0 h-full w-full object-cover"
                src={src || "/images/default/liked.png"}
                {...props}
                alt="Image"
            />
        </div>
    )
})

export default ImagePrimary
