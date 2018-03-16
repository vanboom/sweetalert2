export let signaturePad

export const resizeCanvas = (canvas) => {
  var ratio = Math.max(window.devicePixelRatio || 1, 1)
  canvas.width = canvas.offsetWidth * ratio
  canvas.height = canvas.offsetHeight * ratio
  canvas.getContext('2d').scale(ratio, ratio)
}

export const fixSignature = () => {
  var canvas = document.querySelector('canvas')
  if (canvas) {
    var spb = document.getElementById('swal-signature-pad-body')
    canvas.height = spb.clientHeight
    canvas.width = canvas.offsetWidth
    window.onresize = resizeCanvas(canvas)
    resizeCanvas(canvas)
    signaturePad = new SignaturePad(canvas, {penColor: 'DarkBlue'})
    var spc = document.getElementById('swal-signature-pad-clear')
    spc.addEventListener('click', function () { signaturePad.clear(); return false })
  }
}
