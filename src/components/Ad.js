import frog from "../assets/frog-sneakers.png";

function Ad(){
    return(
        <div>
            <img src={frog}
                 alt="frog"
                 width={641}
                 height={300}
            />
        </div>
    );
}

export default Ad;