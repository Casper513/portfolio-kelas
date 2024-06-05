import Image from "next/image";


export const Logo = ({width, height, src} : {width: string, height: string, src?: string}) => {
  return (
    <div className={`${width} ${height} rounded-full object-cover overflow-hidden`}>
      <Image src={src ? src : "/assets/images/logo.jpg"} alt="Logo" width={100} height={100} />
    </div>
  )
}