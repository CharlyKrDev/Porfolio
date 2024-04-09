import {useTranslation} from 'react-i18next'

export const Footer = ()=>{

    const {t} = useTranslation()


    return(

        <footer className="flex h-[50px] text-xs sm:text-lg bg-red-100">
            <h2 className='m-auto text-center'>
                {t('footer.footerH2')}</h2></footer>
    )
}