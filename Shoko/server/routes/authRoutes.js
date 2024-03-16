const express=require ('express');
const router =express.Router();
const cors=require('cors')
const{addCases,test,registerUser,loginUser,getProfile,Cases}=require('../controllers/authControllers')
router.use(
    cors({
        credentials: true,
        origin:'http://localhost:5173'
    })
)

router.post('/login',loginUser)
router.get('/',test)
router.post('/register',registerUser)
router.get('/profile',getProfile)
router.get('/cases',Cases)
router.post('/cases',addCases)


module.exports=router