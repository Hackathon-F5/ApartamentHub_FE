import PostForm from "../../components/postForm/PostForm";
import { BackButton } from "../../components/backButton/BackButton";

function PostAd() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-8">
      <BackButton />
      <PostForm></PostForm>
    </div>
  );
}

export default PostAd;
