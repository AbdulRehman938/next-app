import { InquiryModel } from "../models/Inquiry.js";
const aboutValues = [
    {
        title: "Clarity over noise",
        description: "Every sprint starts with a clear user problem and ends with a measurable outcome.",
    },
    {
        title: "Small loops, fast learning",
        description: "We iterate in tight cycles so your team can make confident product decisions quickly.",
    },
    {
        title: "Craft with purpose",
        description: "We keep interfaces elegant and maintainable, with systems your engineers can extend.",
    },
];
const blogPosts = [
    {
        id: "post-1",
        title: "How to write a landing page users trust in 10 seconds",
        excerpt: "A practical framework for sharpening your hero section and supporting proof without adding clutter.",
        href: "/blog",
    },
    {
        id: "post-2",
        title: "A lean design system for startup teams",
        excerpt: "What to standardize first so your product can move quickly while preserving consistency.",
        href: "/blog",
    },
    {
        id: "post-3",
        title: "From idea to shipped flow in one week",
        excerpt: "The sprint structure we use to validate a user problem and ship a high-quality first release.",
        href: "/blog",
    },
];
export async function getAboutValuesHandler(_req, res, next) {
    try {
        res.status(200).json({ success: true, data: aboutValues });
    }
    catch (error) {
        next(error);
    }
}
export async function getBlogPostsHandler(_req, res, next) {
    try {
        res.status(200).json({ success: true, data: blogPosts });
    }
    catch (error) {
        next(error);
    }
}
export async function getLiveMetricsHandler(_req, res, next) {
    try {
        const inquiryCount = await InquiryModel.countDocuments();
        const latestInquiry = await InquiryModel.findOne().sort({ createdAt: -1 }).lean();
        res.status(200).json({
            success: true,
            data: {
                inquiryCount,
                latestInquiryAt: latestInquiry?.createdAt ?? null,
            },
        });
    }
    catch (error) {
        next(error);
    }
}
