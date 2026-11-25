import * as React from "react";

const Image = React.forwardRef(({ src, fittingType: _fittingType, ...props }, ref) => (
  <img ref={ref} src={src || "/images/image-fallback.svg"} {...props} />
));
Image.displayName = "Image"

export { Image }
