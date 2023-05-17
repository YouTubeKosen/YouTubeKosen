import Link from "next/link";

export const ShowAllPosts = () => {
    return (
        <div className='w-[200px] mx-auto mt-5 lg:mt-3 '>
            <Link href="/posts">
                <button className="w-[200px] bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                >すべての投稿を見る</button>
            </Link>
        </div>
    );
}