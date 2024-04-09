import {useTranslation} from 'react-i18next'

export const Footer = ()=>{

    const {t} = useTranslation()


    return(

        <footer className="flex h-[50px] text-xs sm:text-lg ml-8">
            <h2 className='m-auto'>
                {t('footer.footerH2')}</h2></footer>
    )
}