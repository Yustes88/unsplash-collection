'use client'

import {useTheme} from 'next-themes'
import Link from 'next/link'
import * as React from 'react'
import {SVGProps} from 'react'

const Logo = (props: SVGProps<SVGSVGElement>) => {
  const {theme = 'light'} = useTheme()

  const updatedTheme = theme === 'light' ? '#101828' : '#fff'

  return (
    <Link href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={118}
        height={24}
        fill="none"
        {...props}
      >
        <path
          fill={updatedTheme}
          fillRule="evenodd"
          d="M12.418.79a2.072 2.072 0 0 0-.835 0c-.319.065-.604.225-.83.351l-.061.035-7.67 4.26a20.87 20.87 0 0 1-.065.036c-.24.132-.54.298-.772.55-.2.216-.35.473-.444.754-.107.324-.105.667-.104.94V16.279c-.001.274-.003.618.104.942.093.28.244.537.444.754.232.251.533.417.772.549l.066.036 7.669 4.26.061.035c.226.127.511.286.83.352.275.056.56.056.835 0 .318-.066.603-.225.829-.352l.062-.035 7.668-4.26.029-.016.037-.02c.24-.132.54-.298.772-.549.2-.217.351-.474.444-.754.107-.324.105-.668.104-.942V7.717c.002-.274.003-.617-.104-.941a2.072 2.072 0 0 0-.444-.755c-.231-.25-.533-.417-.772-.549h-.001l-.065-.036-7.668-4.26-.062-.035c-.226-.126-.51-.286-.83-.351Zm-.72 2.198a6.79 6.79 0 0 1 .297-.16L12 2.824l.005.002c.06.03.14.073.297.16l6.891 3.829L12 10.812 4.807 6.816l6.891-3.828ZM3.71 8.578l7.254 4.03V20.6l-6.935-3.853a6.794 6.794 0 0 1-.31-.177l-.004-.003v-.006a6.88 6.88 0 0 1-.005-.357V8.577Z"
          clipRule="evenodd"
        />
        <path
          fill={updatedTheme}
          d="M37.124 17.14c-.765 0-1.46-.145-2.086-.434a3.442 3.442 0 0 1-1.484-1.344c-.364-.597-.546-1.349-.546-2.254V6.64h1.904v6.468c0 .635.177 1.167.532 1.596.364.43.924.644 1.68.644.765 0 1.33-.215 1.694-.644.364-.43.546-.961.546-1.596V6.64h1.89v6.468c0 .905-.182 1.657-.546 2.254a3.442 3.442 0 0 1-1.484 1.344c-.616.29-1.316.434-2.1.434Zm5.522-.14V9.58h1.862v1.064h.084c.074-.13.19-.29.35-.476.158-.196.378-.364.658-.504.28-.15.634-.224 1.064-.224.569 0 1.036.13 1.4.392.373.252.648.588.826 1.008.186.42.28.873.28 1.358V17h-1.862v-4.55c0-.401-.112-.747-.336-1.036-.224-.29-.56-.434-1.008-.434-.346 0-.626.089-.84.266a1.484 1.484 0 0 0-.476.658 2.6 2.6 0 0 0-.14.854V17h-1.862Zm10.763.14c-.606 0-1.106-.08-1.498-.238-.392-.168-.704-.373-.938-.616a3.074 3.074 0 0 1-.504-.742 3.335 3.335 0 0 1-.224-.602l-.042-.252h1.764l.042.154c.038.103.103.224.196.364.103.13.257.247.462.35.206.103.476.154.812.154.402 0 .691-.084.868-.252.178-.177.266-.373.266-.588a.585.585 0 0 0-.238-.49c-.149-.13-.373-.229-.672-.294l-1.022-.21a5.5 5.5 0 0 1-1.148-.364 2.413 2.413 0 0 1-.868-.672c-.224-.29-.336-.658-.336-1.106 0-.663.252-1.209.756-1.638.504-.439 1.19-.658 2.058-.658.551 0 1.004.075 1.358.224.364.15.654.336.868.56.224.224.388.448.49.672.112.224.182.415.21.574l.056.224h-1.708l-.042-.126a.913.913 0 0 0-.182-.308 1.028 1.028 0 0 0-.392-.294c-.168-.093-.396-.14-.686-.14-.392 0-.672.084-.84.252-.158.168-.238.345-.238.532 0 .205.09.364.266.476.178.112.406.196.686.252l.966.21c.691.14 1.256.383 1.694.728.448.345.672.845.672 1.498 0 .439-.116.84-.35 1.204-.224.355-.555.64-.994.854-.429.205-.952.308-1.568.308Zm4.037 2.604V9.58h1.862v1.036h.098a3.01 3.01 0 0 1 .35-.448c.178-.187.42-.355.728-.504.308-.15.7-.224 1.176-.224.56 0 1.046.112 1.456.336.41.215.752.509 1.022.882.27.364.471.775.602 1.232a4.757 4.757 0 0 1 0 2.8c-.13.457-.331.873-.602 1.246-.27.364-.611.658-1.022.882-.41.215-.896.322-1.456.322-.476 0-.868-.075-1.176-.224a2.702 2.702 0 0 1-.728-.518 3.697 3.697 0 0 1-.35-.434h-.098v3.78h-1.862Zm1.834-6.454c0 .383.07.751.21 1.106.14.355.35.649.63.882.28.224.63.336 1.05.336.43 0 .784-.112 1.064-.336.28-.233.49-.527.63-.882s.21-.723.21-1.106c0-.383-.07-.751-.21-1.106a2.052 2.052 0 0 0-.63-.868c-.28-.233-.635-.35-1.064-.35-.42 0-.77.117-1.05.35-.28.224-.49.513-.63.868s-.21.723-.21 1.106ZM66.171 17l.014-10.64h1.848V17h-1.862Zm6.376-7.56c.476 0 .868.08 1.176.238.308.15.55.317.728.504.178.177.299.322.364.434h.084V9.58h1.862V17H74.9v-1.036h-.084a2.725 2.725 0 0 1-.364.448c-.177.187-.42.355-.728.504-.308.15-.7.224-1.176.224-.55 0-1.031-.107-1.442-.322a3.261 3.261 0 0 1-1.036-.882 4.2 4.2 0 0 1-.616-1.246 5.07 5.07 0 0 1 0-2.8c.14-.457.346-.868.616-1.232.28-.373.626-.667 1.036-.882.41-.224.891-.336 1.442-.336Zm.49 1.526c-.42 0-.775.117-1.064.35-.28.224-.49.513-.63.868s-.21.723-.21 1.106c0 .383.07.751.21 1.106.14.355.35.649.63.882.29.224.644.336 1.064.336.42 0 .77-.112 1.05-.336.28-.233.49-.527.63-.882s.21-.723.21-1.106c0-.383-.07-.751-.21-1.106a2.052 2.052 0 0 0-.63-.868c-.28-.233-.63-.35-1.05-.35Zm7.971 6.174c-.607 0-1.106-.08-1.498-.238-.392-.168-.705-.373-.938-.616a3.074 3.074 0 0 1-.504-.742 3.335 3.335 0 0 1-.224-.602l-.042-.252h1.764l.042.154c.037.103.103.224.196.364.103.13.257.247.462.35.205.103.476.154.812.154.401 0 .69-.084.868-.252.177-.177.266-.373.266-.588a.585.585 0 0 0-.238-.49c-.15-.13-.373-.229-.672-.294l-1.022-.21a5.5 5.5 0 0 1-1.148-.364 2.413 2.413 0 0 1-.868-.672c-.224-.29-.336-.658-.336-1.106 0-.663.252-1.209.756-1.638.504-.439 1.19-.658 2.058-.658.55 0 1.003.075 1.358.224.364.15.653.336.868.56.224.224.387.448.49.672.112.224.182.415.21.574l.056.224h-1.708l-.042-.126a.913.913 0 0 0-.182-.308 1.028 1.028 0 0 0-.392-.294c-.168-.093-.397-.14-.686-.14-.392 0-.672.084-.84.252-.159.168-.238.345-.238.532 0 .205.089.364.266.476.177.112.406.196.686.252l.966.21c.69.14 1.255.383 1.694.728.448.345.672.845.672 1.498 0 .439-.117.84-.35 1.204-.224.355-.555.64-.994.854-.43.205-.952.308-1.568.308ZM84.99 17V6.36h1.862v4.284h.084c.075-.13.191-.29.35-.476.159-.196.378-.364.658-.504.28-.15.635-.224 1.064-.224.57 0 1.036.13 1.4.392.373.252.649.588.826 1.008.187.42.28.873.28 1.358V17h-1.862v-4.55c0-.401-.112-.747-.336-1.036-.224-.29-.56-.434-1.008-.434-.345 0-.625.089-.84.266a1.484 1.484 0 0 0-.476.658c-.093.27-.14.555-.14.854V17H84.99Zm7.905 0V6.64h4.522c.662 0 1.227.117 1.694.35.466.233.821.546 1.064.938.252.392.378.821.378 1.288 0 .476-.089.868-.266 1.176-.168.308-.374.55-.616.728a2.47 2.47 0 0 1-.644.35v.098c.242.065.513.191.812.378.308.187.574.453.798.798.224.336.336.775.336 1.316 0 .485-.117.957-.35 1.414-.234.448-.602.817-1.106 1.106-.504.28-1.172.42-2.002.42h-4.62Zm4.27-8.75h-2.366v2.702h2.366c.541 0 .933-.135 1.176-.406a1.38 1.38 0 0 0 .364-.952c0-.355-.122-.667-.364-.938-.243-.27-.635-.406-1.176-.406Zm.14 4.158h-2.506v2.982h2.506c.616 0 1.064-.15 1.344-.448.28-.299.42-.649.42-1.05 0-.392-.14-.737-.42-1.036-.28-.299-.728-.448-1.344-.448Zm8.431 4.732c-.812 0-1.503-.182-2.072-.546a3.644 3.644 0 0 1-1.302-1.414 4.228 4.228 0 0 1-.434-1.89c0-.672.145-1.297.434-1.876a3.618 3.618 0 0 1 1.302-1.428c.569-.364 1.26-.546 2.072-.546.821 0 1.512.182 2.072.546.569.364.999.84 1.288 1.428.299.579.448 1.204.448 1.876a4.11 4.11 0 0 1-.448 1.89 3.534 3.534 0 0 1-1.288 1.414c-.56.364-1.251.546-2.072.546Zm0-1.554c.42 0 .77-.107 1.05-.322.289-.215.509-.495.658-.84.149-.355.224-.733.224-1.134 0-.41-.075-.789-.224-1.134a2.025 2.025 0 0 0-.658-.84c-.28-.215-.63-.322-1.05-.322-.411 0-.761.107-1.05.322a2.025 2.025 0 0 0-.658.84 2.832 2.832 0 0 0-.224 1.134c0 .401.075.78.224 1.134.149.345.369.625.658.84.289.215.639.322 1.05.322ZM109.965 17l2.31-3.696-2.324-3.724h1.96l1.61 2.604 1.638-2.604h1.946l-2.38 3.724 2.38 3.696h-1.96l-1.624-2.604-1.61 2.604h-1.946Z"
        />
      </svg>
    </Link>
  )
}
export default Logo
