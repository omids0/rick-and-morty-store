import type { FC } from 'react'

type Props = {
  children: React.ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="min-w-[20rem]">
      <div className="bg-red-500 w-full min-h-[25rem]">dashboard</div>
      {children}
    </div>
  )
}

export default MainLayout
