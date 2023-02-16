import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logoImg from '../../assets/logo.svg'
import { Cart } from '../Cart'
import { HeaderContainer } from './styles'

export function Header() {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      {pathName != '/success' && <Cart />}
    </HeaderContainer>
  )
}
