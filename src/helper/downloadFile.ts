/*
 * @Descripttion: a标签下载文件
 * @Date: 2021-08-17
 * @LastEditTime: 2021-08-17
 */

export default function downloadFile(url: string, fileName = ''): void {
    const regex = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/i;
    if (!regex.test(url)) {
        throw new Error('URL is illegal!');
    }
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.download = fileName;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
