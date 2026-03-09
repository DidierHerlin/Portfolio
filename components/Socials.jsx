import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

const social = [
    {icon: <FaGithub />, path: 'https://github.com/DidierHerlin'},
    {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/didier-herlin-andriatahina-0101a331b/'},
    {icon: <SiGmail />, path: 'didierherlin18@gmail.com'},
    {icon: <FaWhatsapp />, path: 'https://wa.me/+2613875043'},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {social.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials