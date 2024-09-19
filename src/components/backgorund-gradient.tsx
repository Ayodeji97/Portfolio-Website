export default function BackgroundGradient({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1065"
      height="810"
      viewBox="0 0 1065 810"
      fill="none"
      className={`${className}`}
    >
      <g opacity="0.1" filter="url(#filter0_f_2664_18706)">
        <path
          d="M960.371 299.06C991.86 462.57 826.803 631.822 591.707 677.096C356.611 722.37 140.503 626.521 109.014 463.012C77.5262 299.502 122.404 145.774 357.5 100.5C570.5 181 928.883 135.551 960.371 299.06Z"
          fill="#8b5e3c"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2664_18706"
          x="0.0969238"
          y="0.5"
          width="1064.13"
          height="787.813"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_2664_18706"
          />
        </filter>
      </defs>
    </svg>
  );
}
