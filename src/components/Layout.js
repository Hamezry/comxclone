import Live from "./Live"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                {children}
            </div>
            <Live />
        </div>
    )
}

export default Layout