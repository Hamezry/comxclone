import { Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import Overview from "../components/Overview"
import Settings from "../components/Settings"

const Authenticated = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Layout>
    )
}

export default Authenticated