import * as S from './styles'

const Main = ({ title = 'EFL Boilerplate' }) => {
  return (
    <>
      <S.FullBody>
        <div className="header">{title}</div>
        <div className="headline">
          ReactJS NextJS TypeScript StyledComponents ChakraUI Prettier
        </div>
      </S.FullBody>
    </>
  )
}

export default Main
