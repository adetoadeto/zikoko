import Archive from "@/components/archive/archive"

export const generateMetadata = () => {
  return {
    title: 'Archive | Zikoko',
    description: "A collection of old stories"
  }
}

const ArchivePage = () => {

  return (
    <Archive />
  )
}

export default ArchivePage
