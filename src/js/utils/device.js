export const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

export const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)

export const checkDeviceKind = () => (isMobile() ? 'mobile' : 'pc')
export const deviceKind = checkDeviceKind()
