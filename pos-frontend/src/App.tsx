import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./layout/layout";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Batch from "./pages/Batch";
import TransactionDetails from "./pages/TransactionDetails";
import Transaction from "./pages/Transaction";
import User from "./pages/User";
import Action from "./pages/Action";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin/" element={<Layout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products" element={<Product />} />
                <Route path="categories" element={<Category />} />
                <Route path="batch" element={<Batch />} />
                <Route
                    path="transaction-details"
                    element={<TransactionDetails />}
                />
                <Route path="transactions" element={<Transaction />} />
                <Route path="users" element={<User />} />
                <Route path="actions" element={<Action />} />
            </Route>
        </Routes>
    );
}

export default App;
