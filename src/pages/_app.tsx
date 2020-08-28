import ThemeContainer from '../../contexts/theme/ThemeContainer'
import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
