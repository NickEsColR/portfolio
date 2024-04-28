import * as S from './Container.styles'

export const Container = ({children}) => {
  return (
    <S.ContainerContent>
      {children}
    </S.ContainerContent>
  )
}
