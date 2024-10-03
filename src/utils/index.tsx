
const Container: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="flex justify-center items-center max-w-[1440px] m-auto" >
        {children}
    </div>
  )
}

export default Container