import mongoose, { Schema } from "mongoose";

const dnsSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
            enum: [
                "A",
                "AAAA",
                "CNAME",
                "MX",
                "NS",
                "PTR",
                "SOA",
                "SRV",
                "TXT",
                "DNSSEC",
            ],
        },
        host: {
            type: String,
            required: true,
        },
        pointsTo: {
            type: String,
            required: true,
        },
        ttl: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

export const DNS = mongoose.model("DNS", dnsSchema);
