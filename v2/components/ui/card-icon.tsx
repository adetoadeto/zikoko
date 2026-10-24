import { colors } from "@/lib/colors"
import { Color } from "@/lib/interface"

const CardIcon = ({ icon, color }: { icon: string, color: string }) => {
  return (
    <div className={`mb-2 p-0.5 rounded-xl flex justify-center items-center h-9 w-9 ${colors[color as Color].bg}`}><i className={`fa-solid fa-${icon} text-white`}></i></div>
  )
}

export default CardIcon
