import { getListings } from "../lib/getListings";
import { stringify } from "querystring";


async function fetchListings(){
	const { listings } = await getListings();
	if(!listings) throw new Error("Failed to fetch listings")
	return listings;
}

const ConditionalWrapper = ({ children, condition }) => {
    return condition ? (
        <h1>0.00</h1>
    ) : (
        children
    )
}

export default async function Home() {
	const listings = await fetchListings();

	return (
		<div className="grid place-items-center p-14 px-6 md:px-10 lg:px-15 xl:px-18 2xl:px-20">
			<div className="grid auto-cols-auto gap-10 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
				{/* @ts-ignore */}
				{listings.map(listing => (

					<a href={listing.listing_url} key={listing._id} className="block place-items-center mx-auto overflow">
					
						<img className="aspect-square rounded-xl object-cover pointer-events-none" src={listing.images.picture_url} alt="Retaurant pictures" loading="lazy" />

						<div className="flex place-items-center w-full">
							<h1 className="font-bold text-lg text-soft-black-500 grow">{listing.name}</h1>
							<div className="flex space-x-2 p-2 place-items-center">
								<img className="w-4 h-4 aspect-square" src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png" alt="star" />
								<ConditionalWrapper condition={typeof listing.review_scores.review_scores_accuracy === "undefined"}>
									<h1>{listing.review_scores.review_scores_accuracy}.0</h1>
								</ConditionalWrapper>
							</div>
						</div>
						<h1 className="mt-2 w-full text-soft-black-400">{listing.address.market}, {listing.address.suburb}</h1>
						<h1 className="mt-2 w-full text-lg text-soft-black-500">${listing.price["$numberDecimal"]}</h1>

					</a>

				))}

			</div>
			
			<a href="/?p=2">Next Page</a>

		</div>
	)
}