export function downloadAttachment(data: string, fileName: string) {
  const url = window.URL.createObjectURL(new Blob([data]))
  downloadAttachmentFromUrl(url, fileName)
}

export function downloadAttachmentFromUrl(url: string, fileName: string) {
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', fileName)
  link.click()
}
