import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'

const Register = () => {
    const { CreateNewUser, user, setUser } = useContext(AuthContext)
    console.log("🚀 ~ Register ~ user:", user)

    const handleSubmit = (e) => {
        e.preventDefault()
        const Form = new FormData(e.target)
        // const name = Form.get('name')
        const pass = Form.get('password')
        const email = Form.get('email')
        CreateNewUser(email, pass)
            .then((res) => {
                const user = res.user
                setUser(user)
            })
            .then((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="hero  bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                    <div className="card bg-base-100 w-full shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a
                                        href="/auth/login"
                                        className="label-text-alt link link-hover"
                                    >
                                        already have an account
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
