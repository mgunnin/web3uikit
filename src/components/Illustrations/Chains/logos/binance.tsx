import {size} from "../../types";
import React from "react";
import {getSize} from "./helper";

const binanceLogo = (fillOutline: string, fillInlineLeft: string, fillInlineRight: string, size: size) => {
    const { height, width} = getSize(size);
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={width} 
            height={height} 
            viewBox="0 0 102 102" 
            fill="none"
        >
            {
                /**
                 * Bottom Fill
                 */
            }
            <path 
                d="M20.168 70.3139C23.9018 66.5571 27.6357 62.7039 31.3695 58.9471C31.4652 59.0434 31.561 59.1397 31.6567 59.2361C37.9755 65.5938 44.1986 71.8552 50.5174 78.2129C50.8046 78.5019 50.7089 78.5019 51.0919 78.2129C57.4107 71.8552 63.6337 65.5938 69.9526 59.2361C70.0483 59.1397 70.0483 59.0434 70.144 58.9471C73.9736 62.8002 77.7075 66.5571 81.4413 70.3139C81.4413 70.3139 81.3456 70.4102 81.2498 70.5066C71.1972 80.6211 61.1445 90.7357 51.0919 100.85C50.9004 101.043 50.9004 101.043 50.6132 100.85C40.5605 90.7357 30.5078 80.6211 20.4552 70.5066C20.2637 70.4102 20.168 70.4102 20.168 70.3139Z"
                fill={fillInlineLeft}
            />
            {
                /**
                 * Bottom Border
                 */
            }
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M31.3693 57.5276L50.8045 77.0824L69.183 58.5907C69.2238 58.5122 69.3053 58.3714 69.4408 58.2351L70.1439 57.5276L82.8518 70.3138L82.1443 71.0258L82.0779 70.9587C82.1443 71.0258 82.1443 71.0258 82.1443 71.0258L51.7948 101.562C51.7924 101.565 51.7895 101.568 51.7861 101.571C51.751 101.607 51.6678 101.691 51.5789 101.759C51.4576 101.852 51.2213 102 50.8883 102C50.599 102 50.3831 101.884 50.3021 101.839C50.2204 101.794 50.1335 101.736 50.0759 101.697L49.9797 101.632L19.8833 71.3507C19.8562 71.3389 19.8243 71.3245 19.7953 71.3099C19.7311 71.2776 19.5574 71.1869 19.409 71.0003C19.2319 70.7775 19.1719 70.5261 19.1719 70.3139V69.8965L19.4647 69.6019C21.329 67.7261 23.1937 65.8259 25.061 63.923L25.0621 63.9219C26.9282 62.0202 28.797 60.1158 30.6662 58.2351L31.3693 57.5276ZM21.6258 70.2651L50.8523 99.6716L80.0304 70.3139L70.1917 60.4146L51.7447 78.9752L51.688 79.018C51.678 79.0256 51.6488 79.0481 51.6145 79.0747C51.5576 79.1188 51.4864 79.1739 51.4653 79.1893C51.4644 79.19 51.4628 79.1912 51.4607 79.1928C51.4184 79.2253 51.146 79.4349 50.7686 79.4349C50.3241 79.4349 50.0441 79.1592 49.991 79.1068C49.9889 79.1048 49.9871 79.103 49.9858 79.1017C49.9502 79.0673 49.9143 79.0294 49.8934 79.0072L49.8882 79.0018C49.8629 78.9749 49.8405 78.9513 49.8142 78.9248L31.3699 60.367C29.7396 62.0122 28.1089 63.674 26.4762 65.3379L26.4749 65.3392C24.86 66.9849 23.2431 68.6325 21.6258 70.2651ZM50.2962 77.5615C50.2927 77.5641 50.2933 77.5635 50.2975 77.5606C50.2971 77.5609 50.2966 77.5612 50.2962 77.5615Z"
                fill={fillOutline}
            />
            {
                /**
                 * Upper Fill
                 */
            }
            <path
                d="M31.3695 42.9566C27.6357 39.1997 23.9018 35.4429 20.168 31.6861C20.168 31.5898 20.2637 31.5898 20.3594 31.4934C30.4121 21.3789 40.4648 11.2643 50.5174 1.14977C50.7089 0.957115 50.8046 0.957115 50.9961 1.14977C61.0488 11.2643 71.1014 21.3789 81.1541 31.4934C81.2498 31.5898 81.2498 31.5898 81.3456 31.6861C77.6117 35.4429 73.8779 39.1997 70.144 42.9566C70.144 42.9566 70.0483 42.8603 69.9526 42.7639C63.6337 36.4062 57.4107 30.1448 51.0919 23.7871C50.8046 23.4981 50.9004 23.4981 50.5174 23.7871C44.1986 30.0485 37.8798 36.4062 31.6567 42.6676C31.561 42.7639 31.4652 42.8603 31.3695 42.9566Z"
                fill={fillInlineRight}
            />
            {
                /**
                 * Upper Border
                 */
            }
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M50.7567 2.32834L79.9348 31.6861L70.144 41.5372L51.7949 23.0751C51.7686 23.0487 51.7462 23.025 51.7208 22.9982C51.7011 22.9773 51.662 22.9356 51.6233 22.8982C51.6219 22.8969 51.6202 22.8952 51.6181 22.8931C51.5649 22.8408 51.285 22.5651 50.8405 22.5651C50.4631 22.5651 50.1906 22.7746 50.1483 22.8072C50.1462 22.8088 50.1447 22.8099 50.1438 22.8106C50.1227 22.8261 50.0515 22.8812 49.9945 22.9253C49.9602 22.9518 49.9311 22.9744 49.921 22.982L49.8674 23.0224L49.8197 23.0697C43.6385 29.1947 37.4578 35.4114 31.3695 41.5372L21.5786 31.6861L50.7567 2.32834ZM69.4409 43.6686L70.144 44.376L82.7562 31.6861L82.0021 30.9273L82.0013 30.9265L81.9998 30.925L81.9975 30.9227L81.9925 30.9176C81.9957 30.9209 81.9892 30.9143 81.9925 30.9176L81.9461 30.871L81.9439 30.8687L81.9334 30.8581L81.931 30.8557L81.9297 30.8545L81.8915 30.816L51.6936 0.432129C51.5949 0.332663 51.265 0 50.7567 0C50.2484 0 49.9185 0.332663 49.8199 0.432129L19.7022 30.7353C19.6947 30.7403 19.6862 30.746 19.6766 30.7525C19.6294 30.7841 19.4886 30.8797 19.3693 31.0512C19.2304 31.2509 19.172 31.475 19.172 31.6861V32.1034L31.3695 44.376L32.3598 43.3796C38.4475 37.2544 44.6237 31.0401 50.8015 24.9144L69.4409 43.6686ZM51.3129 24.4384C51.3164 24.4358 51.3158 24.4364 51.3116 24.4394C51.312 24.4391 51.3124 24.4387 51.3129 24.4384Z"
                fill={fillOutline}
            />
            {
                /**
                 * Inner Middle
                 */
            }
            <path 
                d="M50.7084 62.4151C46.9746 58.6582 43.145 54.8051 39.4111 51.0482C43.145 47.2914 46.9746 43.4382 50.8041 39.5851C54.538 43.3419 58.3676 47.1951 62.1014 50.9519C58.3676 54.8051 54.538 58.5619 50.7084 62.4151Z"
                fill={fillInlineRight}
            />
            {
                /**
                 * Outer Middle
                 */
            }
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M50.804 38.1656L63.5031 50.9429L62.8132 51.6548C60.3218 54.2258 57.783 56.7589 55.2369 59.2994C53.9618 60.5715 52.685 61.8455 51.4113 63.127L50.7082 63.8344L38.0002 51.0482L50.804 38.1656ZM40.8217 51.0482L50.7087 60.9961C51.7596 59.9417 52.8081 58.8956 53.853 57.8531C56.1562 55.5551 58.442 53.2744 60.6984 50.9598L50.804 41.0045L40.8217 51.0482Z"
                fill={fillOutline}
            />
            {
                /**
                 * Left fill
                 */
            }
            <path 
                d="M23.4228 50.952C23.4228 51.0483 23.3271 51.0483 23.3271 51.0483C23.3271 51.1446 23.2314 51.1446 23.2314 51.1446C19.689 54.7088 16.0509 58.3693 12.5085 61.9335C12.2213 62.2225 12.2213 62.2225 11.9341 61.9335C8.39173 58.3693 4.75363 54.7088 1.21126 51.1446C0.924045 50.8556 0.924045 50.8556 1.21126 50.663C4.75363 47.0988 8.39173 43.4383 11.9341 39.8741C12.1256 39.6815 12.1256 39.6815 12.4128 39.8741C15.9552 43.4383 19.5933 47.0988 23.1356 50.663C23.2314 50.7593 23.3271 50.8556 23.4228 50.952Z"
                fill={fillInlineLeft}
            />
            {
                /**
                 * Left Border
                 */
            }
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M12.1735 41.0527L22.0122 50.952L12.2214 60.803L2.38271 50.9038L12.1735 41.0527ZM23.8053 51.9867L13.2117 62.6454C13.2072 62.65 13.2024 62.6548 13.1973 62.6599C13.1407 62.7171 13.0493 62.8093 12.959 62.882C12.8661 62.9568 12.6053 63.1555 12.2214 63.1555C11.8375 63.1555 11.5767 62.9568 11.4838 62.882C11.3934 62.8093 11.3021 62.7171 11.2455 62.6599C11.2404 62.6548 11.2356 62.65 11.2311 62.6454L0.508242 51.8566C0.503707 51.852 0.498929 51.8472 0.493938 51.8422C0.436502 51.7845 0.350878 51.6986 0.283523 51.6167C0.282343 51.6152 0.281028 51.6137 0.279585 51.6119C0.226355 51.5476 0 51.2739 0 50.8677C0 50.3814 0.308252 50.0978 0.395147 50.0213C0.454296 49.9692 0.52226 49.9197 0.576974 49.8819L11.2311 39.1622C11.2335 39.1597 11.2364 39.1567 11.2398 39.1533C11.2749 39.1177 11.3581 39.0333 11.447 38.9652C11.5682 38.8723 11.8046 38.7244 12.1376 38.7244C12.4269 38.7244 12.6428 38.8399 12.7238 38.8849C12.8055 38.9303 12.8923 38.9887 12.95 39.0274C12.9549 39.0307 12.9596 39.0339 12.9641 39.0369L13.0462 39.0919L24.4189 50.5346V50.952C24.4189 51.1526 24.3661 51.3699 24.2358 51.5665C24.1795 51.6515 24.1163 51.7212 24.052 51.7782C23.9723 51.8693 23.8859 51.937 23.8053 51.9867Z"
                fill={fillOutline}
            />
            {
                /**
                 * Right Fill
                 */
            }
            <path 
                d="M100.589 50.952C100.589 51.0483 100.494 51.0483 100.494 51.0483C100.494 51.1446 100.398 51.1446 100.398 51.1446C96.8554 54.7088 93.2173 58.3693 89.675 61.9335C89.3878 62.2225 89.3878 62.2225 89.1963 61.9335C85.6539 58.3693 82.0158 54.7088 78.4734 51.1446C78.282 50.952 78.282 50.952 78.4734 50.663C82.1115 47.0025 85.6539 43.4383 89.292 39.7778C89.4835 39.5851 89.5792 39.5851 89.7707 39.7778C93.4088 43.4383 96.9512 47.0025 100.589 50.663C100.398 50.8556 100.494 50.8556 100.589 50.952Z"
                fill={fillInlineRight}
            />
            {
                /**
                 * Right Border
                 */
            }
            <path 
                fillRule="evenodd"
                clipRule="evenodd"
                d="M89.5312 40.9564L99.322 50.8075L89.4355 60.7549L79.6446 50.9038L89.5312 40.9564ZM100.971 51.9867L90.3779 62.6455C90.3734 62.65 90.3686 62.6548 90.3637 62.6598C90.3063 62.7176 90.2209 62.8038 90.1395 62.8715C90.1381 62.8727 90.1366 62.874 90.1349 62.8754C90.0707 62.9291 89.8002 63.1555 89.3996 63.1555C88.9204 63.1555 88.6398 62.8477 88.5628 62.7592C88.5111 62.6997 88.4619 62.6313 88.4242 62.5762L77.7702 51.8566C77.7677 51.8542 77.7648 51.8512 77.7614 51.8478C77.7261 51.8126 77.6421 51.7288 77.5743 51.6392C77.482 51.5173 77.3337 51.278 77.3337 50.9399C77.3337 50.6464 77.4495 50.4277 77.4942 50.3463C77.5394 50.2639 77.5975 50.1763 77.636 50.1184C77.6393 50.1134 77.6424 50.1087 77.6454 50.1041L77.7003 50.0213L88.5887 39.0658C88.5905 39.0641 88.5924 39.0622 88.5944 39.0602C88.693 38.9607 89.0229 38.6281 89.5312 38.6281C90.0395 38.6281 90.3694 38.9607 90.468 39.0602C90.47 39.0622 90.4719 39.0641 90.4737 39.0658L102 50.663L101.577 51.0886C101.558 51.2487 101.503 51.4138 101.402 51.5665C101.346 51.6515 101.283 51.7213 101.218 51.7783C101.138 51.8693 101.052 51.937 100.971 51.9867Z"
                fill={fillOutline}
            />
            <defs>
                <linearGradient id="paint0_linear_30_8549" x1="50.8046" y1="58.9471" x2="50.8046" y2="100.995" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0.3"/>
                </linearGradient>
                <linearGradient id="paint1_linear_30_8549" x1="50.7568" y1="1.00528" x2="50.7568" y2="42.9566" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0.3"/>
                </linearGradient>
                <linearGradient id="paint2_linear_30_8549" x1="50.7563" y1="39.5851" x2="50.7563" y2="62.4151" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0.3"/>
                </linearGradient>
                <linearGradient id="paint3_linear_30_8549" x1="12.2093" y1="39.7296" x2="12.2093" y2="62.1502" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0.3"/>
                </linearGradient>
                <linearGradient id="paint4_linear_30_8549" x1="89.4596" y1="39.6333" x2="89.4596" y2="62.1502" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0.3"/>
                </linearGradient>
            </defs>
        </svg>
    )
}

export default binanceLogo;