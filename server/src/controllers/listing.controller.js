import Listing from '../models/listing.model.js';
import { errorHandler } from '../Utils/error.js';

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};


export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, 'Listing not found!'));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, 'You can only delete your own listings!'));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json('Listing has been deleted!');
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, 'Listing not found!'));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, 'You can only update your own listings!'));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, 'Listing not found!'));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};


// getListings gets listings from MongoDB based on search, filters, sorting, and pagination options.
// It then sends the matching listings back to the frontend as a JSON response.

// Controller to get listings
export const getListings = async (req, res, next) => {
  try {
    // Get number of listings to return
    const limit = parseInt(req.query.limit) || 9;

    // Get number of listings to skip
    const startIndex = parseInt(req.query.startIndex) || 0;

    // Get offer filter from URL
    let offer = req.query.offer;

    // Show both offer and non-offer listings
    if (offer === undefined || offer === 'false') {
      offer = { $in: [false, true] };
    }

    // Get furnished filter from URL
    let furnished = req.query.furnished;

    // Show both furnished and unfurnished listings
    if (furnished === undefined || furnished === 'false') {
      furnished = { $in: [false, true] };
    }

    // Get parking filter from URL
    let parking = req.query.parking;

    // Show listings with and without parking
    if (parking === undefined || parking === 'false') {
      parking = { $in: [false, true] };
    }

    // Get listing type from URL
    let type = req.query.type;

    // Show both sale and rent listings
    if (type === undefined || type === 'all') {
      type = { $in: ['sale', 'rent'] };
    }

    // Get search text from URL
    const searchTerm = req.query.searchTerm || '';

    // Get sorting field
    const sort = req.query.sort || 'createdAt';

    // Get sorting order
    const order = req.query.order || 'desc';

    // Find listings matching the filters
    const listings = await Listing.find({
      name: { $regex: searchTerm, $options: 'i' },
      offer,
      furnished,
      parking,
      type,
    })
      // Sort the listings
      .sort({ [sort]: order })

      // Limit number of results
      .limit(limit)

      // Skip listings for pagination
      .skip(startIndex);

    // Send listings to frontend
    return res.status(200).json(listings);

  } catch (error) {
    // Pass error to error handler
    next(error);
  }
};
