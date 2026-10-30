import AuthButton from "../components/AuthButton";
function signupForm({onsignup})
{
    return(
    <div className="signup">
        
        <AuthButton signup={onsignup}/>
    </div>
    );
}
export default signupForm;

