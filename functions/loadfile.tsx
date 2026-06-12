import { File } from 'expo-file-system';

export default function loadfile() {
    const file = File.pickFileAsync({ mimeTypes: ["image/jpeg", "image/png", "image/svg+xml"] })
    return file
}