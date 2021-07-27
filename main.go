package main
import(
    "github.com/gin-gonic/gin"
)
func main(){
    router := gin.Default()
    router.Static("/", "./view/dist/view")
    router.Run()
}
