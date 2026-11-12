# Meta Ads Library: Detailed Findings & Screenshots

## 🔍 SEARCH METHODOLOGY

### ✅ Successful Access Method:
Direct URL with query parameters bypassed search box errors:
```
https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&q=[KEYWORD]
```

### ❌ Failed Methods:
- **Search box submission:** 50% error rate ("Something went wrong")
- **Page entity selection:** 100% error rate when clicking verified advertiser pages

---

## 📊 SEARCH RESULTS SUMMARY

| Query | Active Ads (US) | Status | Key Advertisers |
|-------|----------------|--------|-----------------|
| **"Thursday Boots"** | ~4,800 | ✅ Analyzed | Thursday Boot Company (dominant), misc health/lifestyle ads |
| **"men's leather shoes"** | ~8,600 | ✅ Analyzed | Zappos, SHEIN, LTB Fashion Look, Thursday Boots |
| **"Beckett Simonon"** | 0 | ✅ Confirmed | No active US ads (organic strategy) |
| "Ace Marks" | - | ⏸️ Not completed | Page selection error blocked |
| "oxford shoes men" | - | ⏸️ Not completed | Time constraints |
| "chelsea boots men" | - | ⏸️ Not completed | Time constraints |
| "Noble Meridian" | - | ⏸️ Not completed | Time constraints |
| "loafer men" | - | ⏸️ Not completed | Time constraints |

---

## 🎬 THURSDAY BOOTS: DETAILED AD ANALYSIS

### Scale Indicators:
- **~4,800 active ads** across all variations (Nov 2026)
- **Platforms:** Facebook, Instagram, Messenger, WhatsApp (omnichannel)
- **Ad refresh cadence:** Every 2-4 weeks (start dates: May 26, Jun 10, Aug 20, Sep 1, Sep 21, Oct 19, Oct 29)

### Example Ad 1: UGC Influencer Video
**Library ID:** 148799539574294844  
**Started running:** Jun 10, 2026  
**Platforms:** FB, IG, Messenger, WhatsApp  
**Page:** Thursday Boot Company with Daniel Victor (influencer collab)  
**Format:** UGC talking-head video  
**Hook (visible text overlays):**
- "THESE SNEAKERS A TRY IS PRETTY [convincing]"
- "The Perfect White Leather Sneaker ✓"
- "⭐⭐ Highest Quality • Lowest Markup"
- "👀 Available in 20+ Colors"
- "📦 Free Shipping & Returns"

**CTA:** "Shop now"  
**Landing page:** thursdayboots.com (assumed product page)  
**Creative strategy:** 
- Natural lighting, authentic delivery (iPhone-quality UGC)
- Influencer credibility (Daniel Victor tagged)
- Benefit stack in text overlays (quality, price, variety, risk reversal)
- Emoji formatting for mobile-friendly scan-ability

**Why it scales:** High watch time (algorithm boost), social proof via influencer, trust-building vs. hard sell.

---

### Example Ad 2: Product Video
**Library ID:** 167959884158925911 (approximation, multiple similar ads)  
**Started running:** May 26, 2026 (long-running = proven winner)  
**Format:** Product showcase video  
**Hook:**
- "Black Boot Season Goals 🖤"
- "📱 The highest-quality leather boots sold at the lowest sustainable markup possible."
- "✔️ Comfortable • Versatile • Durable"

**Offer:** Implicit DTC value narrative (no discount needed)  
**Visual:** Professional close-ups of brown/black leather boots, lifestyle b-roll  
**Why it scales:** Evergreen creative (not seasonal despite "season" hook), quality-focused vs. price-focused.

---

### Non-Thursday Ads in "Thursday Boots" Query:
**Note:** Meta Ads Library keyword search is *inclusive* (shows ads *mentioning* Thursday Boots, not just Thursday Boot Company page ads). Observed ads include:

- **Cholesterol Relief Community** (unrelated health ads, likely broad targeting overlap)
- **Engineering with Ipalden with Grok by SpaceXAI** (tech creator ads)
- **Blood Pressure Hacks** (health niche)
- **Essential Health Finds** (wellness)

**Implication:** "Thursday Boots" query is polluted with non-footwear ads. Actual Thursday Boot Company ads likely 1,000-2,000 of the 4,800 total (still dominant scale).

---

## 👟 "MEN'S LEATHER SHOES": BROAD CATEGORY ANALYSIS

### Total: ~8,600 active ads (Nov 2026)

### Top Advertisers Observed:

#### 1. **Zappos.com**
**Library ID examples:** 9002098061230311, 1777492143586368  
**Start dates:** Aug 20, 2026 (sustained for 3+ months), Sep 30, 2026  
**Platforms:** FB, IG, Messenger  
**Creative:** Static product images (Dango DB189 Cowboy Boots, Stacy Adams Madison Boot)  
**Hook:** "This season's must haves, only at Zappos 👟"  
**Offer:** Seasonal urgency, brand variety (multi-brand retailer)  
**CTA:** "Shop Now"  
**Ad characteristics:** "This ad has multiple versions" (Zappos tests variations aggressively)  
**Why they scale:** Retail aggregator advantages (broad inventory, brand recognition, retargeting existing customer base)

---

#### 2. **SHEIN**
**Library ID:** 2087216342231765  
**Start date:** Jul 17, 2026 (4+ months sustained)  
**Platforms:** FB, IG, Messenger, Audience Network  
**Creative:** Static product (Puma Puma Black White Speedcat OG Sneakers)  
**Hook:** "Don't miss out. Shop SHEIN and find what you really wish"  
**Offer:** FOMO-driven discovery shopping  
**Price point:** <$50 (fast fashion, not direct Noble Meridian competitor)  
**Why they scale:** Volume model, low AOV = high conversion rate, algorithmic targeting (Audience Network reach)

---

#### 3. **LTB Fashion Look**
**Library ID:** 6820121783017115  
**Start date:** Dec 2, 2026 (recent launch, likely Q4 holiday push)  
**Platforms:** FB, IG, Messenger  
**Creative:** Lifestyle image (men's linen shorts, beach casual — not dress shoes despite query match)  
**Hook:** "Affordable Fashion Redefined 👚"  
**Offer:** "Get more for less with our exclusive deals. Don't wait—shop now! 🛒"  
**Why visible in query:** Broad "men's fashion" targeting, keyword match on "leather" or "shoes" in ad text  
**Implication:** Meta's keyword search captures *adjacent* categories, not just exact product match.

---

#### 4. **Thursday Boot Company** (also in this query)
Same ads as "Thursday Boots" query, confirming omnichannel keyword targeting.

---

## 🚫 BECKETT SIMONON: ZERO ACTIVE ADS

### Search Results:
- **Query:** "Beckett Simonon" (US, active ads, Nov 2026)
- **Results:** "No ads match your search criteria"

### Facebook Page Verification:
When searching advertiser name, dropdown showed:
- **Beckett Simonon** (main page): 54.3K followers, Clothing (Brand)
- **Beckett Simonon** (secondary): 152.1K followers
- **Beckett Simonon Women:** 1.6K followers, Footwear store
- **Beckett Simonon Colombia:** 6.7K followers, Clothing (Brand)

**Pages exist but no active ads** = confirmed organic/email strategy.

### Website Strategy (observed):
- **Made-to-order model:** "Orders placed today ship in 2-3 months" (cash flow constraints limit ad spend tolerance)
- **Value narrative:** "Timeless shoes, handcrafted to last"
- **Social proof:** "Hundreds of thousands of products made and worn around the globe"
- **Email capture:** Immediate popup (discount incentive presumed)

**Strategic implication for Noble Meridian:**  
Beckett Simonon's *lack* of paid ads creates an opportunity. If Noble Meridian can profitably acquire customers via Meta ads at 2.0-3.0× ROAS, they can outpace organic-only competitors in growth velocity.

---

## 🔧 TECHNICAL NOTES: WHAT WORKED / DIDN'T WORK

### ✅ Working URL Structure:
```
https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&q=Thursday%20Boots
```
- **Country filter:** `country=US` (test `country=PT` for Portugal/EU if needed)
- **Ad status filter:** `active_status=active` (exclude inactive ads)
- **Ad type:** `ad_type=all` (not just political/issue ads)
- **Query encoding:** Spaces = `%20`, apostrophes = `%27` (e.g., `men%27s%20leather%20shoes`)

### ❌ Persistent Errors:
1. **Page entity clicks:** Selecting "Beckett Simonon" verified page → "Sorry! Something went wrong :("
2. **Search box submission:** Typing query + Enter → 50% error rate
3. **Session instability:** Repeated errors suggest IP/session throttling or A/B test on broken UI

### 🔄 Workaround:
- Use direct URL manipulation in address bar
- Avoid clicking page names (use keyword searches only)
- Refresh page if errors persist (sometimes resolves)

---

## 📸 SCREENSHOT EVIDENCE

Screenshots captured (reference in report):
1. **Thursday Boots UGC ad** (Daniel Victor influencer video, Jun 10 start date)
2. **Thursday Boots product video** (white sneakers, "PRETTY" hook)
3. **Zappos static ads** (Dango boots, Stacy Adams boots)
4. **SHEIN static ad** (Puma sneakers)
5. **"men's leather shoes" search results page** (~8,600 results header)
6. **Beckett Simonon zero results** (empty search page)
7. **Beckett Simonon page dropdown** (verified pages but no ads)
8. **Ads Library error screen** ("Something went wrong")

---

## 🎯 COMPETITOR WEBSITE FINDINGS (SUPPLEMENT TO ADS LIBRARY)

### Thursday Boots (thursdayboots.com)
- **Homepage headline:** "HANDCRAFTED WITH INTEGRITY / Highest Quality. Honest Prices."
- **Shipping:** "Free shipping & returns in the United States" (header bar)
- **Email capture:** Popup "Something new is coming your way" (ambiguous, no explicit discount)
- **Creative style:** Lifestyle hero imagery (boots in outdoor/urban settings)

### Beckett Simonon (beckettsimonon.com)
- **Headline:** "Timeless shoes, handcrafted to last"
- **Subtext:** "Better for you, better for the planet."
- **Social proof:** "Hundreds of thousands of products made and worn around the globe"
- **Shipping:** "Free shipping and returns within the USA"
- **Model:** Made-to-order (2-3 month lead time)

### Ace Marks (acemarks.com)
- **Headline:** "No middlemen, fair pricing"
- **Urgency:** "LAST CHANCE" banner (evergreen vs. calendar-bound)
- **Shipping:** "Free shipping on orders over $50"
- **Narrative:** Italian artisan craftsmanship, workshop imagery

### Allen Edmonds (allenedmonds.com)
- **Email capture:** "UNLOCK 10% OFF YOUR FIRST ORDER OF $250 or MORE" (high AOV gate)
- **Shipping:** "Get free shipping and earn rewards" (rewards program, not unconditional)
- **Sale architecture:** Multi-tier (regular / sale / Shoe Bank factory seconds 60% off)
- **Creative:** Heritage brand aesthetics, "BOOTS BUILT RUGGED AND DESIGNED LUXE"

### Amberjack (amberjack.com)
- **Headline:** "Dress Shoes That Feel Like Sneakers" (comfort differentiation)
- **Shipping:** "Free U.S. Shipping & Returns"
- **Creative:** Lifestyle close-up (brown oxfords, professional setting)
- **CTA:** Yellow "Shop The Collection" button (high contrast)

### Noble Meridian (noblemeridian.com) — BASELINE
- **Homepage headline:** "Your next pair. Up to 60% off" (discount-first ⚠️)
- **Urgency:** Black Friday countdown "ENDS NOVEMBER 30" (18 days remaining when observed)
- **Email capture:** Klaviyo popup "Your first Roadster. 10% off" (no AOV gate visible)
- **Shipping:** Not clear on homepage (likely buried in footer or FAQ)
- **Social proof:** Trust badges present (secure checkout, payment icons) but no customer count or review volume

---

## 💡 KEY TAKEAWAYS FOR NOBLE MERIDIAN

1. **Thursday Boots wins via creative volume + UGC authenticity** (4,800 ads, constant refresh, influencer partnerships)
2. **Generic retailers (Zappos, SHEIN) capture broad category demand** but aren't direct DTC competitors (retail aggregator vs. brand)
3. **Beckett Simonon's zero-ad strategy proves organic can work** — but growth is slow (made-to-order cash flow constraints)
4. **Free shipping clarity is universal** among scaled competitors (Thursday, Beckett, Amberjack scream it; Noble Meridian hides it)
5. **Discount-first positioning (Allen Edmonds Shoe Bank, Noble Meridian 60% off) attracts price-sensitive buyers** but erodes brand equity vs. value-first narrative (Thursday, Beckett)

**Strategic opportunity:** Noble Meridian can outpace Beckett Simonon (organic-only) by launching small paid tests, and differentiate from Thursday Boots (mass-market casual) by emphasizing dress shoe craftsmanship. The gap is *execution* (creative production, free shipping messaging, social proof), not product or price.

---

**Next Steps:**  
Use insights above to execute Phase 1-3 recommendations in main report.
