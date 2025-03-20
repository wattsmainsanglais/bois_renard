
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    
    const { slug } = await params

    const t = await getTranslations(`Gites`)

    return (
      <>
      <p>{slug}</p>
      <p>{t(`${slug}.Desc`)}</p>
      
      </>
    )

  }