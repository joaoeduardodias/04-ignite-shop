import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { CartButton } from '../CartButton'
import {
  CartClose,
  CartContent,
  CartFinalization,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  FinalizationDetails,
} from './styles'

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Sacola de compras</h2>

          <section>
            {/* <p>Parece que seu está vazio :( </p> */}

            <CartProduct>
              <CartProductImage>
                <Image
                  width={100}
                  height={93}
                  alt=""
                  src="https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1677456000&Signature=NlCdfAob276-eES3f0bovMXjh~FWTI6-S6KBGMMIW9X4btHHZuTtCKnDqzejI16cg0Ik1sbWCtHeNGjHrHg29uCkjb-GUZctik3aOVNQv4Xq-VVZD4lREvu8SO6KZ81xKQOVShRGycLKTT27BukdqLvMOEsEpg95RRJzJaVcOj1zCkkvVuaYUzhP-zV2B~bWV4QEkk3y-8B0SswnPXKA0ryGDf~oy8cwgqK0Tm1Ip1jJtmIZ3-xZc3SwcjRii~7oR3H8uQANZCNzi4ek-RT~sw5pxakSpi9bWZsJYYihf16QOkcm0lOjC1NjAo~QMbxx0GXWU4FaTKlx3NSShyR-jQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </CartProductImage>
              <CartProductDetails>
                <p>Produto 1</p>
                <strong>R$: 74,90</strong>
                <button>remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>

          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>2 items</p>
              </div>
              <div>
                <span>Valor total</span>
                <p>R$: 100,00</p>
              </div>
            </FinalizationDetails>
            <button>Finalizar compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
