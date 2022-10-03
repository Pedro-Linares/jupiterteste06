import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
const Login = () => {
  return (
    <main className={styles.containerMain}>
    <div className={styles.containerleft}>
        <div className={styles.svg}>
            <svg width="684" height="358" viewBox="0 0 684 358" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_23_146)">
                    <path d="M79.2384 286.222H605.691V4.58932H79.2384V286.222Z" fill="white" />
                    <path d="M610.033 290.811H74.8956V0H610.033V290.811ZM83.5812 281.633H601.348V9.17825H83.5812V281.633Z" fill="#E5E5E5" />
                    <path d="M319.946 64.1699C322.707 64.1699 324.946 66.4085 324.946 69.1699V154.759C324.946 157.521 322.707 159.759 319.946 159.759H195.875C194.344 159.759 192.897 160.461 191.949 161.663L179.571 177.356C176.492 181.261 170.22 178.764 170.666 173.811L171.441 165.208C171.704 162.281 169.399 159.759 166.461 159.759H165.111C162.35 159.759 160.111 157.521 160.111 154.759V69.1699C160.111 66.4085 162.35 64.1699 165.111 64.1699H319.946Z" fill="#F0F0F0" />
                    <path d="M416.504 75.9394V137.227H500.813L516.388 156.975L514.61 137.227H522.188V75.9394H416.504Z" fill="#F0F0F0" />
                    <path d="M56.5761 348.96H64.1825L67.8014 317.957H56.5753L56.5761 348.96Z" fill="#FFB7B7" />
                    <path d="M54.6361 346.336L69.6158 346.336H69.6164C72.1482 346.336 74.5762 347.399 76.3664 349.29C78.1567 351.182 79.1625 353.748 79.1627 356.423V356.751L54.6365 356.752L54.6361 346.336Z" fill="#252525" />
                    <path d="M147.961 348.696L155.347 346.775L151.85 315.757L140.949 318.592L147.961 348.696Z" fill="#FFB7B7" />
                    <path d="M145.484 346.638L160.03 342.855L160.03 342.855C162.489 342.216 165.087 342.635 167.253 344.02C169.419 345.405 170.976 347.642 171.581 350.24L171.655 350.558L147.839 356.752L145.484 346.638Z" fill="#252525" />
                    <path d="M51.8987 341.568L53.4788 333.025C53.4788 333.025 56.3873 300.039 77.2613 267.119L84.0556 231.358C84.0556 231.358 82.0378 204.289 101.513 189.637L107.518 185.266L128.569 186.541L133.431 214.669L143.228 281.225C143.228 281.225 145.756 281.475 146.704 289.172C148.631 292.404 149.771 296.09 150.022 299.9C150.022 299.9 155.036 314.516 156.379 325.277L156.221 335.806L145.634 341.767L123.569 275.825L107.787 238.96C107.787 238.96 100.191 264.934 88.5568 287.185C88.5568 287.185 72.6213 323.633 69.4377 331.038L65.9615 343.157L51.8987 341.568Z" fill="#252525" />
                    <path d="M122.285 128.665C130.595 128.665 137.332 121.546 137.332 112.765C137.332 103.983 130.595 96.8642 122.285 96.8642C113.975 96.8642 107.238 103.983 107.238 112.765C107.238 121.546 113.975 128.665 122.285 128.665Z" fill="#FFB7B7" />
                    <path d="M122.285 128.665C130.595 128.665 137.332 121.546 137.332 112.765C137.332 103.983 130.595 96.8642 122.285 96.8642C113.975 96.8642 107.238 103.983 107.238 112.765C107.238 121.546 113.975 128.665 122.285 128.665Z" fill="#FFB8B8" />
                    <path d="M101.557 189.806L106.525 176.695C103.015 164.683 103.23 151.8 107.139 139.926V139.926L108.089 139.099C116.368 131.895 123.634 133.206 130.378 142.019C131.463 143.452 132.733 144.718 134.151 145.779C137.125 147.984 141.843 159.963 135.613 166.985L130.629 197.706C131.154 214.668 119.507 208.281 101.557 189.806Z" fill="#FBB2FF" />
                    <path d="M172.78 171.974C172.137 171.46 171.396 171.102 170.609 170.924C169.821 170.746 169.006 170.753 168.221 170.944C167.436 171.135 166.701 171.505 166.066 172.029C165.431 172.553 164.913 173.217 164.547 173.976L151.997 172.943L149.542 180.85L167.286 182.045C168.533 182.609 169.932 182.671 171.218 182.218C172.504 181.765 173.589 180.829 174.266 179.588C174.943 178.346 175.166 176.886 174.892 175.482C174.618 174.079 173.866 172.831 172.78 171.974H172.78Z" fill="#FFB7B7" />
                    <path d="M160.763 184.8L125 177.744L113.367 157.135C112.62 154.945 112.726 152.531 113.663 150.425C114.6 148.318 116.291 146.69 118.363 145.901C120.435 145.111 122.72 145.223 124.713 146.213C126.707 147.203 128.247 148.99 128.995 151.179L134.45 167.122L162.734 172.07L160.763 184.8Z" fill="#FBB2FF" />
                    <path d="M95.4639 109.282C103.436 109.282 109.899 102.452 109.899 94.0276C109.899 85.6027 103.436 78.7731 95.4639 78.7731C87.4913 78.7731 81.0283 85.6027 81.0283 94.0276C81.0283 102.452 87.4913 109.282 95.4639 109.282Z" fill="#2F2E41" />
                    <path d="M83.0125 106.659C84.8809 108.086 87.0456 109.02 89.3254 109.381C91.6051 109.743 93.9338 109.523 96.1164 108.738C98.299 107.954 100.272 106.629 101.871 104.874C103.469 103.118 104.647 100.984 105.305 98.6494C105.056 100.742 104.399 102.757 103.376 104.567C102.353 106.378 100.986 107.945 99.3605 109.169C97.7354 110.393 95.8879 111.247 93.9345 111.679C91.9811 112.11 89.9643 112.109 88.0113 111.675C86.0584 111.241 84.2118 110.384 82.5881 109.158C80.9645 107.932 79.599 106.364 78.5779 104.552C77.5568 102.74 76.9022 100.724 76.6556 98.6314C76.409 96.5388 76.5756 94.4148 77.1449 92.3936C76.8216 95.1091 77.1957 97.8664 78.2281 100.376C79.2605 102.886 80.9131 105.057 83.0125 106.659V106.659Z" fill="#2F2E41" />
                    <path d="M139.982 106.676C137.462 101.909 136.497 99.917 133.248 97.0179C130.375 94.4539 126.84 93.701 123.989 96.1304C120.617 94.5906 116.865 94.2415 113.289 95.1348C109.714 96.0282 106.507 98.1164 104.145 101.089C101.782 104.062 100.39 107.761 100.175 111.636C99.96 115.512 100.934 119.357 102.952 122.601C104.97 125.845 107.924 128.315 111.376 129.643C114.828 130.972 118.593 131.088 122.113 129.975C125.632 128.862 128.718 126.579 130.912 123.465C133.106 120.351 134.291 116.572 134.29 112.69C134.288 112.009 134.249 111.327 134.174 110.65C136.652 110.283 137.504 107.044 139.982 106.676Z" fill="#2F2E41" />
                    <path d="M583.753 220.799C583.8 219.747 584.065 218.718 584.529 217.786C584.993 216.854 585.645 216.04 586.438 215.403C587.232 214.765 588.148 214.32 589.122 214.097C590.097 213.875 591.105 213.88 592.077 214.114L601.094 200.686L610.153 204.486L597.167 223.261C596.687 224.96 595.634 226.414 594.207 227.348C592.78 228.281 591.079 228.63 589.425 228.326C587.772 228.023 586.281 227.089 585.235 225.701C584.19 224.314 583.662 222.57 583.753 220.799V220.799Z" fill="#A0616A" />
                    <path d="M593.644 209.25L609.676 180.757L603.145 162.351L612.041 137.282L612.369 137.431C612.584 137.528 617.639 139.912 618.388 148.448L628.611 182.4L601.327 219.804L593.644 209.25Z" fill="#D0D0D0" />
                    <path d="M506.573 104.501C507.562 104.632 508.512 104.99 509.356 105.551C510.199 106.112 510.917 106.862 511.456 107.747C511.996 108.633 512.346 109.633 512.481 110.676C512.616 111.72 512.532 112.782 512.236 113.788L524.209 124.327L519.923 133.577L503.213 118.444C501.647 117.807 500.356 116.585 499.586 115.009C498.815 113.433 498.618 111.614 499.033 109.895C499.447 108.177 500.443 106.678 501.833 105.684C503.223 104.69 504.909 104.269 506.573 104.501V104.501Z" fill="#A0616A" />
                    <path d="M516.704 115.815L542.347 134.909L560.218 129.45L583.183 140.761L583.017 141.095C582.909 141.314 580.269 146.455 572.158 146.585L539.334 154.73L506.153 123.093L516.704 115.815Z" fill="#D0D0D0" />
                    <path d="M563.627 348.004H554.712L550.471 311.667L563.628 311.668L563.627 348.004Z" fill="#A0616A" />
                    <path d="M548.344 345.312H565.537V356.751H537.519C537.519 355.249 537.799 353.762 538.343 352.374C538.887 350.986 539.684 349.725 540.689 348.662C541.695 347.6 542.888 346.758 544.201 346.183C545.515 345.608 546.922 345.312 548.344 345.312V345.312Z" fill="#252525" />
                    <path d="M599.258 348.004H590.343L586.102 311.667L599.259 311.668L599.258 348.004Z" fill="#A0616A" />
                    <path d="M583.975 345.312H601.168V356.751H573.15C573.15 355.249 573.43 353.762 573.974 352.374C574.518 350.986 575.315 349.725 576.321 348.662C577.326 347.6 578.519 346.758 579.832 346.183C581.146 345.608 582.554 345.312 583.975 345.312V345.312Z" fill="#252525" />
                    <path d="M602.428 215.372L601.701 269.161L600.974 339.854L584.977 338.317L576.978 240.729L566.797 338.317H550.282L548.618 239.961L554.436 218.445L602.428 215.372Z" fill="#252525" />
                    <path d="M552.841 218.773L550.404 218.662L561.724 152.763L557.089 132.845C556.848 131.809 556.975 130.715 557.446 129.772C557.918 128.828 558.7 128.099 559.646 127.725L567.985 124.42L570.931 115.858L594.177 118.505L594.748 125.196C597.267 126.05 618.011 133.35 616.58 141.668C615.167 149.878 606.826 175.709 606.403 177.018L604.942 214.062L604.762 214.157C604.546 214.271 588.523 222.596 571.117 222.595C564.837 222.706 558.607 221.403 552.841 218.773V218.773Z" fill="#D0D0D0" />
                    <path d="M581.643 111.621C590.887 111.621 598.38 103.702 598.38 93.9345C598.38 84.1666 590.887 76.2481 581.643 76.2481C572.4 76.2481 564.906 84.1666 564.906 93.9345C564.906 103.702 572.4 111.621 581.643 111.621Z" fill="#A0616A" />
                    <path d="M595.2 111.055C592.01 114.646 586.087 112.718 585.671 107.813C585.638 107.433 585.641 107.049 585.678 106.669C585.893 104.496 587.081 102.524 586.796 100.23C586.732 99.6587 586.53 99.1146 586.211 98.6489C583.669 95.0522 577.703 100.258 575.304 97.0016C573.833 95.0051 575.562 91.8617 574.433 89.6303C572.944 86.6852 568.531 88.138 565.764 86.5251C562.685 84.7306 562.869 79.7388 564.896 76.7026C567.368 72.9998 571.701 71.0239 575.981 70.7392C580.26 70.4544 584.51 71.6769 588.506 73.3223C593.045 75.1917 597.547 77.7754 600.34 81.9934C603.738 87.123 604.065 94.0193 602.366 100.017C601.332 103.666 597.805 108.123 595.2 111.055Z" fill="#2F2E41" />
                    <path d="M413.864 343.118L416.35 336.359L392.864 323.008L389.194 332.983L413.864 343.118Z" fill="#FFB8B8" />
                    <path d="M427.186 325.487C426.132 325.053 425.007 324.843 423.876 324.869C422.745 324.895 421.631 325.156 420.595 325.638C419.56 326.119 418.625 326.812 417.843 327.676C417.061 328.539 416.448 329.557 416.039 330.672L414.361 335.228L411.775 342.26L411.143 343.985L419.43 347.391L427.446 325.596L427.186 325.487Z" fill="#252525" />
                    <path d="M411.776 330.111L410.695 333.141L407.996 340.705L407.931 340.894C401.055 341.828 393.517 339.998 386.545 337.154C383.756 336.017 381.024 334.729 378.36 333.295C374.417 331.189 370.887 328.968 368.07 327.067C363.83 324.191 361.208 322.032 361.208 322.032C361.208 322.032 360.515 322.693 359.262 323.828C357.582 325.347 354.897 327.719 351.497 330.511C350.2 331.583 348.807 332.705 347.319 333.876C336.348 342.476 322.268 319.53 322.268 319.53C322.268 319.53 326.228 316.866 327.263 316.348C330.593 314.683 338.419 310.754 345.17 307.262C348.649 305.46 351.838 303.77 353.979 302.57C361.56 298.304 370.985 306.376 370.985 306.376L411.776 330.111Z" fill="#2F2E41" />
                    <path d="M411.776 330.111L410.695 333.141L407.996 340.705L407.931 340.894C401.055 341.828 393.517 339.998 386.545 337.154C383.756 336.017 381.024 334.729 378.36 333.295C374.417 331.189 370.887 328.968 368.07 327.067C363.83 324.191 361.208 322.032 361.208 322.032C361.208 322.032 360.515 322.693 359.262 323.828C357.582 325.347 354.897 327.719 351.497 330.511C350.2 331.583 348.807 332.705 347.319 333.876C336.348 342.476 322.268 319.53 322.268 319.53C322.268 319.53 326.228 316.866 327.263 316.348C330.593 314.683 338.419 310.754 345.17 307.262C348.649 305.46 351.838 303.77 353.979 302.57C361.56 298.304 370.985 306.376 370.985 306.376L411.776 330.111Z" fill="#252525" fill-opacity="0.7" />
                    <path d="M302.038 266.498H269.575C268.907 266.497 268.267 266.216 267.795 265.718C267.322 265.219 267.057 264.542 267.056 263.836V249.05C267.056 243.795 269.032 238.755 272.548 235.039C276.064 231.323 280.834 229.236 285.807 229.236C290.78 229.236 295.549 231.323 299.065 235.039C302.582 238.755 304.557 243.795 304.557 249.05V263.836C304.556 264.542 304.291 265.219 303.819 265.718C303.346 266.216 302.706 266.497 302.038 266.498V266.498Z" fill="#2F2E41" />
                    <path d="M332.911 285.071C332.155 285.211 331.438 285.525 330.809 285.99C330.181 286.455 329.656 287.06 329.273 287.762C328.889 288.464 328.656 289.247 328.59 290.055C328.524 290.862 328.626 291.676 328.889 292.437L320.062 301.017L323.687 307.958L335.992 295.656C337.174 295.104 338.122 294.113 338.658 292.871C339.194 291.629 339.281 290.222 338.901 288.917C338.521 287.613 337.701 286.5 336.597 285.792C335.493 285.083 334.182 284.826 332.911 285.071V285.071Z" fill="#FFB8B8" />
                    <path d="M306.349 324.079C305.951 324.079 305.551 324.061 305.151 324.025C302.77 323.815 300.478 322.969 298.491 321.567C296.504 320.164 294.886 318.251 293.79 316.007L279.648 287.243C278.721 285.358 278.518 283.168 279.08 281.129C279.642 279.09 280.927 277.358 282.667 276.294C284.406 275.23 286.467 274.916 288.42 275.417C290.373 275.918 292.069 277.195 293.154 278.983L306.201 309.919L323.955 294.676L334.235 298.904L316.874 319.157C315.54 320.705 313.915 321.942 312.102 322.79C310.29 323.637 308.331 324.076 306.349 324.079V324.079Z" fill="#FFAE66" />
                    <path d="M411.879 352.624L414.85 346.087L392.404 330.869L388.02 340.516L411.879 352.624Z" fill="#FFB8B8" />
                    <path d="M426.444 336.126C425.425 335.608 424.319 335.308 423.19 335.242C422.06 335.176 420.93 335.346 419.863 335.742C418.795 336.138 417.812 336.752 416.97 337.55C416.128 338.348 415.442 339.313 414.953 340.391L412.95 344.797L409.86 351.599L409.104 353.267L417.119 357.336L426.696 336.256L426.444 336.126Z" fill="#252525" />
                    <path d="M410.744 339.486L409.446 342.419L406.205 349.742L406.127 349.925C399.203 350.298 391.82 347.861 385.076 344.46C382.377 343.1 379.747 341.594 377.195 339.947C373.417 337.528 370.059 335.026 367.389 332.903C363.37 329.691 360.913 327.325 360.913 327.325C360.913 327.325 360.174 327.929 358.842 328.958C357.056 330.336 354.207 332.483 350.614 334.991C349.243 335.955 347.773 336.96 346.204 338.007C334.64 345.69 318.195 355.047 304.208 357.023C279.642 360.495 285.424 325.852 285.424 325.852L304.975 315.123L313.275 316.904L322.516 318.879L325.791 319.583C325.791 319.583 326.412 319.335 327.481 318.903C330.923 317.513 339.011 314.23 345.996 311.296C349.595 309.782 352.898 308.357 355.12 307.334C362.989 303.696 371.799 312.509 371.799 312.509L410.744 339.486Z" fill="#252525" />
                    <path d="M249.648 357.85C250.396 357.669 251.097 357.316 251.702 356.818C252.307 356.319 252.801 355.686 253.15 354.964C253.498 354.241 253.693 353.447 253.72 352.637C253.746 351.827 253.604 351.02 253.304 350.274L261.7 341.223L257.74 334.49L246.053 347.447C244.9 348.063 244.001 349.105 243.527 350.375C243.052 351.644 243.035 353.054 243.478 354.336C243.921 355.618 244.794 356.684 245.931 357.332C247.068 357.98 248.391 358.164 249.648 357.85H249.648Z" fill="#FFB8B8" />
                    <path d="M290.403 267.158C297.632 267.158 303.493 260.965 303.493 253.326C303.493 245.687 297.632 239.494 290.403 239.494C283.174 239.494 277.313 245.687 277.313 253.326C277.313 260.965 283.174 267.158 290.403 267.158Z" fill="#FFB8B8" />
                    <path d="M273.374 291.722L284.776 325.883L284.707 326.003C283.122 328.773 282.603 331.008 283.209 332.465C283.368 332.836 283.602 333.165 283.894 333.431C284.185 333.697 284.528 333.893 284.898 334.005L311.881 314.075L310.937 306.087L310.989 305.998C313.597 301.588 314.442 297.594 313.5 294.128C312.646 291.324 310.803 288.975 308.353 287.569L308.259 287.491L294.801 270.181L276.81 273.559L273.374 291.722Z" fill="#FFAE66" />
                    <path d="M256.034 351.683L248.395 341.748L266.809 309.626L275.395 281.583L275.661 281.674L275.395 281.583C275.864 280.051 276.638 278.643 277.665 277.454C278.693 276.265 279.95 275.322 281.351 274.69C282.752 274.057 284.265 273.75 285.789 273.788C287.312 273.826 288.81 274.208 290.182 274.91C291.553 275.611 292.766 276.615 293.74 277.854C294.713 279.093 295.424 280.538 295.824 282.091C296.224 283.645 296.305 285.271 296.06 286.86C295.815 288.45 295.25 289.965 294.405 291.304L278.643 316.258L256.034 351.683Z" fill="#FFAE66" />
                    <path d="M308.993 250.528H289.142L288.939 247.517L287.921 250.528H284.864L284.461 244.559L282.444 250.528H276.529V250.233C276.534 246.077 278.098 242.093 280.879 239.155C283.659 236.216 287.429 234.563 291.362 234.559H294.161C298.093 234.563 301.863 236.216 304.644 239.155C307.424 242.093 308.989 246.077 308.993 250.233V250.528Z" fill="#2F2E41" />
                    <path d="M288.98 269.258C288.83 269.258 288.681 269.244 288.534 269.217L273.999 266.506V241.121H289.999L289.603 241.609C284.092 248.401 288.244 259.416 291.21 265.377C291.428 265.813 291.526 266.306 291.491 266.799C291.456 267.291 291.29 267.763 291.012 268.161C290.78 268.5 290.474 268.777 290.121 268.968C289.768 269.159 289.377 269.258 288.98 269.258Z" fill="#2F2E41" />
                    <path d="M506.146 223.779V259.541H356.22L334.57 286.99L337.043 259.541H326.509V223.779H506.146Z" fill="#F0F0F0" />
                    <path d="M388.84 248.084C392.228 248.084 394.974 245.182 394.974 241.603C394.974 238.023 392.228 235.121 388.84 235.121C385.453 235.121 382.707 238.023 382.707 241.603C382.707 245.182 385.453 248.084 388.84 248.084Z" fill="white" />
                    <path d="M368.139 248.084C371.527 248.084 374.273 245.182 374.273 241.603C374.273 238.023 371.527 235.121 368.139 235.121C364.752 235.121 362.006 238.023 362.006 241.603C362.006 245.182 364.752 248.084 368.139 248.084Z" fill="white" />
                    <path d="M347.438 248.084C350.826 248.084 353.572 245.182 353.572 241.603C353.572 238.023 350.826 235.121 347.438 235.121C344.051 235.121 341.305 238.023 341.305 241.603C341.305 245.182 344.051 248.084 347.438 248.084Z" fill="white" />
                    <path d="M610.618 358H-15.3129C-15.4951 358 -15.6699 357.909 -15.7988 357.747C-15.9276 357.585 -16 357.365 -16 357.135C-16 356.906 -15.9276 356.686 -15.7988 356.524C-15.6699 356.362 -15.4951 356.271 -15.3129 356.271H610.618C610.8 356.271 610.975 356.362 611.103 356.524C611.232 356.686 611.305 356.906 611.305 357.135C611.305 357.365 611.232 357.585 611.103 357.747C610.975 357.909 610.8 358 610.618 358Z" fill="#CACACA" />
                </g>
                <defs>
                    <clipPath id="clip0_23_146">
                        <rect width="700" height="358" fill="white" transform="translate(-16)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    </div>

    <div className={styles.containerRight}>
        <div className={styles.cardForm}>
            <form action="">
                <h1>Welcome! This is the HR platform from Jupiter</h1>
                <div className={styles.textField}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="name@dominio.com"
                        //value={email}
                        //onChange={handleEmailInput}
                    />
                </div>
                <div className={styles.textField}>
                    <label htmlFor="password">Password</label>
                    <input
                        className={styles.password}
                        type="password"
                        name="password"
                        placeholder="●●●●●●●●●●●"
                        //value={password}
                       // onChange={handlePasswordInput}
                    />
                    <i className="fa" aria-hidden="true"></i>
                </div>
                <Link to='/dashboard'>
                <button  className={styles.btn}>Sign In</button>
                </Link>
                
            </form>

        </div>
    </div>
</main>
  )
}

export default Login