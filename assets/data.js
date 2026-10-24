// Nat 5 Art & Design — question bank, worksheets, key facts, mock papers and links.
// Ported from the previous single-page version of this site (kept in the repo as legacy.html).
// Question format: {topic, type:'mcq'|'fillin', q, opts (mcq), ans (index for mcq, text for fillin), explain}
const META={"subject": "Art & Design", "title": "Free Nat 5 Art & Design Revision — Scotland", "slug": "nat5-art-design", "store": "n5art_v3", "legacyStore": null};
const TOPICS=[{"id": "expressive", "name": "Expressive Art Studies", "icon": "🎨", "sub": "Visual elements · Composition · Media & techniques · Mood & atmosphere · Artists & influences"}, {"id": "design", "name": "Design Studies", "icon": "✏️", "sub": "Design elements · Function · Target market · Style · Visual impact · Designers & influences"}, {"id": "vocab", "name": "Art & Design Vocabulary", "icon": "📖", "sub": "Colour theory · Line · Tone · Texture · Shape & form · Pattern · Scale · Composition"}, {"id": "influences", "name": "Influences on Artists", "icon": "🌍", "sub": "Social · Cultural · Political · Personal · Art movements · Technology · Environment"}, {"id": "portfolio", "name": "Portfolios & Process", "icon": "📁", "sub": "Expressive portfolio · Design portfolio · Line of development · Evaluation · Research"}];
const QUESTIONS=[
{"topic": "expressive", "type": "mcq", "q": "In the SQA question paper, Section 1 (Expressive Art Studies) requires candidates to:", "opts": ["Design a product for a given brief", "Comment on an unseen artwork AND demonstrate knowledge of an artist they have studied, using appropriate art vocabulary", "Write a biography of a famous artist", "Produce a painting in exam conditions"], "ans": 1, "explain": "Section 1 Expressive Art Studies: candidates answer the mandatory question (about their studied artist) and ONE optional question (commenting on an unseen image). Both require justified, analytical responses using art vocabulary — not just description."},
{"topic": "expressive", "type": "mcq", "q": "Which response would gain a mark for COLOUR in the SQA exam?", "opts": ["\"The painting has bright colours.\"", "\"The painting uses warm red and orange tones in the foreground which contrast with the cool blues in the background, creating depth.\"", "\"There is a lot of colour in this painting.\"", "\"The artist used paint.\""], "ans": 1, "explain": "SQA marking principle: marks are NOT awarded for description alone. Responses must be JUSTIFIED — stating the visual element AND explaining its effect/purpose. \"Bright colours\" is descriptive. Stating that warm/cool contrast creates depth is analytical and would gain a mark."},
{"topic": "expressive", "type": "mcq", "q": "COMPOSITION in expressive art refers to:", "opts": ["The materials used to make the artwork", "The way elements are arranged and organised within an artwork — how the artist has structured the visual space", "The mood or feeling created by the artwork", "The scale or size of the artwork"], "ans": 1, "explain": "Composition: the arrangement of visual elements within an artwork — positioning of objects, use of space, focal points, balance, perspective, viewpoint. A well-composed artwork leads the viewer's eye and creates visual interest."},
{"topic": "expressive", "type": "mcq", "q": "MEDIA HANDLING AND TECHNIQUES refers to:", "opts": ["How the artwork makes the viewer feel", "The subject matter shown in the artwork", "The materials the artist has used and HOW they have used them — brushwork, texture, layering, mark-making", "The colours used in the artwork"], "ans": 2, "explain": "Media handling: how the artist has physically worked with materials — e.g. \"thick impasto paint has been applied with a palette knife creating a rough, textured surface\" or \"fine brushwork has been used to create detail and realism.\" Always describe the technique AND its effect."},
{"topic": "expressive", "type": "mcq", "q": "MOOD AND ATMOSPHERE in an artwork is BEST described as:", "opts": ["The physical size of the artwork", "The feeling or emotional impact created by the artwork — how it makes the viewer feel and how the artist has achieved this", "The title of the artwork", "The type of paint used"], "ans": 1, "explain": "Mood and atmosphere: the emotional quality of the artwork and how it was achieved — e.g. \"dark, stormy colours and heavy textures create an oppressive, threatening mood\" or \"soft, pastel tones and gentle brushwork create a peaceful, calm atmosphere.\""},
{"topic": "expressive", "type": "mcq", "q": "TONE in art refers to:", "opts": ["The colour of an object", "The lightness or darkness of a colour — from the lightest highlight to the darkest shadow", "The rough or smooth quality of a surface", "The size of different elements in a composition"], "ans": 1, "explain": "Tone: the range of light and dark values in an artwork. Tonal contrast creates depth, volume, and drama. Artists use tone to: model 3D form (light/shadow on objects), create depth (light foreground, dark background), and establish mood (dark tones = sombre; light tones = cheerful)."},
{"topic": "expressive", "type": "mcq", "q": "LINE in expressive art can be used to:", "opts": ["Only show the outline of objects", "Create structure, direct the viewer's eye, suggest movement, define edges, create pattern, and convey mood — e.g. flowing lines suggest calm, jagged lines suggest tension", "Only measure proportions", "Only show perspective"], "ans": 1, "explain": "Line is a fundamental visual element with many expressive uses: define edges/outlines, create direction/movement, suggest energy (jagged vs flowing), build pattern/texture (hatching), show perspective (converging lines). Always consider: type of line, how it is used, and what effect it creates."},
{"topic": "expressive", "type": "mcq", "q": "TEXTURE in art can be either:", "opts": ["Only smooth or rough", "Actual (tactile — physically rough or smooth) OR implied (visual — the illusion of texture on a 2D surface created through brushwork, mark-making, or other techniques)", "Only created with oil paint", "Only relevant to sculpture"], "ans": 1, "explain": "Actual texture: physically felt on the surface (impasto paint, collage materials, sculpture). Implied texture: visual illusion of texture on a 2D surface — achieved through mark-making, stippling, hatching, or layered paint that appears to have texture when viewed."},
{"topic": "expressive", "type": "mcq", "q": "SHAPE AND FORM in art — what is the difference between them?", "opts": ["They are exactly the same thing", "Shape is 2D (flat — defined by outline), while form is 3D (has depth, volume, and mass)", "Shape is 3D and form is 2D", "Shape only refers to geometric shapes"], "ans": 1, "explain": "Shape: 2D, flat, defined by line or colour (circle, triangle, organic shape). Form: 3D, has volume and mass (sphere, cube, organic form). In 2D art, artists create the illusion of form through tonal modelling (light and shadow), perspective, and foreshortening."},
{"topic": "expressive", "type": "mcq", "q": "SCALE in art refers to:", "opts": ["The style of an artwork", "The relative size of elements within an artwork compared to each other or to the viewer — used to create emphasis, perspective, and visual hierarchy", "The subject matter of an artwork", "The colour palette used"], "ans": 1, "explain": "Scale: the relative size of elements. Artists use scale to: create a sense of depth/perspective (large foreground, small background), emphasise importance (key objects shown larger), create visual impact (unexpectedly large scale draws attention), and express power relationships."},
{"topic": "expressive", "type": "mcq", "q": "PATTERN in art is created when:", "opts": ["An artwork has only one colour", "Visual elements (shapes, lines, colours, textures) are repeated regularly or irregularly to create a decorative or structural effect", "An artist uses perspective", "An artwork has a clear focal point"], "ans": 1, "explain": "Pattern: repetition of visual elements. Can be regular (geometric, predictable — tiles, wallpaper) or irregular (organic, varied). Pattern can: add visual interest, create rhythm, suggest cultural identity, and unify a composition. Common in textile design, decorative arts, and many painting traditions."},
{"topic": "expressive", "type": "mcq", "q": "SUBJECT MATTER in an artwork refers to:", "opts": ["The style or movement the artwork belongs to", "WHAT is depicted in the artwork — the people, objects, landscape, or abstract forms the artist has chosen to represent", "The materials used to make the artwork", "The mood created by the artwork"], "ans": 1, "explain": "Subject matter: the content or theme of an artwork — what it shows. Examples: portrait (people), still life (objects), landscape (places/nature), abstract (non-representational forms). The choice of subject matter is a creative decision that contributes to the meaning and impact of the work."},
{"topic": "expressive", "type": "mcq", "q": "STYLE in an artwork refers to:", "opts": ["The size of the artwork", "The distinctive visual approach, manner of working, and characteristics of an artist's work — which art movement they belong to or how their work is recognisable", "The cost of the artwork", "The materials the artist used"], "ans": 1, "explain": "Style: the distinctive visual characteristics of an artist's work. Can describe an individual's approach OR an art movement. Examples: Impressionism (loose brushwork, capturing light), Expressionism (emotional, distorted), Realism (accurate representation), Abstract (non-representational)."},
{"topic": "expressive", "type": "mcq", "q": "VISUAL IMPACT refers to:", "opts": ["The weight of an artwork", "The immediate, powerful effect an artwork has on the viewer — how strongly it grabs attention and creates an impression", "The subject matter of an artwork", "The size of the canvas"], "ans": 1, "explain": "Visual impact: how strongly an artwork grabs the viewer's attention and creates an immediate impression. Achieved through: bold colour contrast, strong composition, unexpected scale, striking subject matter, dynamic line, or dramatic lighting. Always justify WHY something creates visual impact."},
{"topic": "expressive", "type": "fillin", "q": "When answering an SQA question about a visual element, you must not just DESCRIBE — you must _____ your answer by explaining the effect it creates.", "ans": "justify", "explain": "SQA marking principle: marks are NOT awarded for description alone. Always justify by explaining the EFFECT of the visual element. \"The painting uses diagonal lines\" is descriptive. \"The diagonal lines create a sense of movement and draw the viewer's eye into the composition\" is justified."},
{"topic": "expressive", "type": "fillin", "q": "The way the artist has arranged elements within an image to create structure, lead the viewer's eye, and establish focal points is called _____.", "ans": "composition", "explain": "Composition: the deliberate organisation of visual elements within an artwork. A strong composition guides the viewer's eye, creates balance/imbalance, establishes hierarchy of importance, and makes an image visually engaging. Techniques: rule of thirds, leading lines, focal points, foreground/middle ground/background."},
{"topic": "expressive", "type": "fillin", "q": "In the SQA question paper, Section 1 focuses on _____ Art Studies (Section 2 is Design Studies).", "ans": "Expressive", "explain": "Section 1 = Expressive Art Studies (20 marks) — commenting on artworks and your studied artist. Section 2 = Design Studies (20 marks) — commenting on design works. Both sections have one mandatory question and five optional questions; candidates answer the mandatory PLUS one optional."},
{"topic": "design", "type": "mcq", "q": "In the SQA question paper, Section 2 (Design Studies) could include images of:", "opts": ["Only paintings and drawings", "Graphics, product design, interior/environmental/architectural design, jewellery, and fashion/textiles", "Only sculpture", "Only industrial machinery"], "ans": 1, "explain": "Section 2 Design Studies: candidates can expect unseen images from any design discipline — graphics (logos, packaging, posters), product design, interior/environmental/architectural design, jewellery, fashion/textiles. Know design vocabulary that applies across ALL these areas."},
{"topic": "design", "type": "mcq", "q": "FUNCTION as a design issue refers to:", "opts": ["How attractive the design looks", "What the product or design DOES — its intended purpose and how effectively it performs it", "The target market for the product", "The materials used in the product"], "ans": 1, "explain": "Function: the primary purpose a design must fulfill — what it is made to do. A chair must support weight comfortably; a logo must communicate a brand clearly; a poster must convey a message effectively. Good design effectively fulfills its function."},
{"topic": "design", "type": "mcq", "q": "FITNESS FOR PURPOSE in design means:", "opts": ["The designer is physically fit", "The design fully meets the requirements of its intended use — it successfully fulfills its function for its target market in its intended context", "The design looks attractive", "The design was made on time"], "ans": 1, "explain": "Fitness for purpose: the extent to which a design successfully meets all its requirements. A product is fit for purpose when: it works as intended, it suits the target user, it is safe, appropriate materials have been used, and it meets the brief. This is a key evaluation criterion."},
{"topic": "design", "type": "mcq", "q": "TARGET MARKET/AUDIENCE as a design issue refers to:", "opts": ["The physical size of the product", "The specific group of people the design is aimed at — which influences all design decisions including style, materials, colour, and price", "The country where the product is sold", "The manufacturing cost"], "ans": 1, "explain": "Target market: the specific audience for a design. Knowledge of the target market influences: aesthetics (what they find appealing), function (what they need it to do), materials (what they can afford/expect), scale, and communication approach. A children's toy has very different requirements from a luxury watch."},
{"topic": "design", "type": "mcq", "q": "VISUAL IMPACT in design refers to:", "opts": ["How much the product costs", "The immediate, powerful visual impression a design makes — how effectively it grabs attention and communicates its message", "How the product functions", "The weight of the product"], "ans": 1, "explain": "Visual impact in design: how strongly a design grabs the viewer's attention and communicates its purpose immediately. Achieved through: bold typography, striking colour combinations, strong shapes, dynamic layout, unexpected scale. Particularly important in graphic design and advertising."},
{"topic": "design", "type": "mcq", "q": "STYLE in design refers to:", "opts": ["How the product works mechanically", "The distinctive visual approach and aesthetic characteristics of a design — including the design movement, period, or tradition it belongs to", "Only the colour scheme of the design", "The price of the product"], "ans": 1, "explain": "Style in design: the distinctive visual approach — could describe a period (Art Deco, Modernism, Bauhaus), a designer's personal aesthetic, or a cultural tradition. Style decisions include: typography choice, colour palette, use of ornamentation, proportion, and overall visual language."},
{"topic": "design", "type": "mcq", "q": "MATERIALS AND TECHNIQUES as a design issue refers to:", "opts": ["The price of the product only", "The choice of materials and HOW they are used or processed — which should be appropriate for the function, target market, aesthetic, and environmental context", "Only the colour of materials", "Only the size of the product"], "ans": 1, "explain": "Materials and techniques: what something is made from and how it is made. In design, material choices affect: function (strength, durability, flexibility), aesthetics (appearance, texture, colour), target market (luxury vs budget), sustainability (environmental impact), and safety."},
{"topic": "design", "type": "mcq", "q": "LAYOUT in graphic design refers to:", "opts": ["The colour scheme of a design", "The arrangement of text, images, and other visual elements within a space — how they are organised to guide the viewer and communicate the message effectively", "The font style used", "The size of the printed piece"], "ans": 1, "explain": "Layout: the organisation of elements on a page or screen — text, images, white space, borders, headings. Good layout guides the viewer's eye, creates visual hierarchy (most important → least important), ensures readability, and creates visual balance. Key principles: alignment, proximity, contrast, repetition."},
{"topic": "design", "type": "mcq", "q": "LETTERING/TYPOGRAPHY in design refers to:", "opts": ["Only handwritten text", "The choice of typefaces/fonts and how they are used — size, weight, spacing, colour — to communicate tone, personality, and hierarchy in a design", "Only the size of text", "Only the colour of text"], "ans": 1, "explain": "Typography/lettering: the art of arranging type. Choices include: typeface (serif, sans-serif, decorative, script), size, weight (bold, light), spacing (tracking, kerning, leading), colour, and placement. Typography communicates personality — a serif font feels traditional; a bold sans-serif feels modern and strong."},
{"topic": "design", "type": "mcq", "q": "DECORATION in design refers to:", "opts": ["The main function of a product", "Ornamentation, pattern, surface detail, or embellishment added to a design for aesthetic purposes — beyond what is purely functional", "The manufacturing process", "The target market for a product"], "ans": 1, "explain": "Decoration: ornamental elements added to enrich the visual appearance of a design. Can be: surface pattern, embossing, engraving, applied colour, illustrations, or motifs. In some design traditions, decoration is minimal (Minimalism); in others it is elaborate (Art Nouveau, traditional crafts)."},
{"topic": "design", "type": "mcq", "q": "Which type of design would you MOST likely study when looking at a logo, poster, or packaging?", "opts": ["Product design", "Interior design", "Graphic design/communication design", "Architectural design"], "ans": 2, "explain": "Graphic design (communication design): includes logos, posters, packaging, book covers, websites, advertising, and signage. Key issues: visual communication, typography, colour, layout, and imagery. The design must communicate clearly and effectively to its target audience."},
{"topic": "design", "type": "fillin", "q": "The specific group of people that a design is created for and aimed at is called the _____ market.", "ans": "target", "explain": "Target market: the defined audience for a design. All design decisions should be tailored to this audience. Understanding the target market requires research into: age, gender, lifestyle, income level, interests, and needs. A children's book has very different design requirements from a luxury goods catalogue."},
{"topic": "design", "type": "fillin", "q": "The design principle that asks whether a product successfully fulfills its intended purpose for its intended users is called _____ for purpose.", "ans": "fitness", "explain": "Fitness for purpose: the primary evaluation criterion in design. A design is fit for purpose when it: functions as intended, suits the target user, is safe to use, uses appropriate materials, and meets all the requirements of the design brief."},
{"topic": "vocab", "type": "mcq", "q": "WARM COLOURS in colour theory are:", "opts": ["Blues, greens, and purples — they appear to recede into the background", "Reds, oranges, and yellows — they appear to advance and create energy and warmth", "Only grey and brown tones", "Only primary colours"], "ans": 1, "explain": "Warm colours (reds, oranges, yellows): associated with warmth, energy, fire. In composition, warm colours tend to advance (come forward) in a picture. Cool colours (blues, greens, purples): associated with cold, calm, water. They tend to recede (go back). Artists use warm/cool contrast to create depth and mood."},
{"topic": "vocab", "type": "mcq", "q": "COMPLEMENTARY COLOURS are:", "opts": ["Colours that are next to each other on the colour wheel — harmonious and similar", "Colours that are opposite each other on the colour wheel — they create maximum contrast when placed together", "Only red, yellow, and blue", "Only black and white"], "ans": 1, "explain": "Complementary colours: opposite each other on the colour wheel (red/green, blue/orange, yellow/purple). When placed next to each other they intensify each other, creating vibrant, high-contrast effects. Used by Impressionists and Post-Impressionists to create luminous, vibrant works."},
{"topic": "vocab", "type": "mcq", "q": "TONAL CONTRAST in an artwork means:", "opts": ["Using many different colours", "Strong differences between light and dark areas — creates drama, depth, and visual impact", "Using only neutral colours", "Using symmetrical composition"], "ans": 1, "explain": "Tonal contrast: the difference between light and dark areas. High tonal contrast (bright highlights next to deep shadows) = dramatic, striking. Low tonal contrast (similar tones throughout) = subtle, harmonious, flat. Artists like Caravaggio used extreme tonal contrast (chiaroscuro) for dramatic effect."},
{"topic": "vocab", "type": "mcq", "q": "CHIAROSCURO is an Italian technique meaning:", "opts": ["A type of printmaking process", "The use of strong contrasts between light and dark (literally \"light-dark\") to model form and create drama — associated with artists like Caravaggio and Leonardo da Vinci", "A type of sculpture", "A form of abstract art"], "ans": 1, "explain": "Chiaroscuro (Italian: chiaro = light, scuro = dark): a dramatic technique using extreme contrasts of light and dark to model three-dimensional form and create theatrical, dramatic effects. Developed in the Renaissance (Leonardo da Vinci) and pushed to dramatic extremes in the Baroque period by Caravaggio and Rembrandt."},
{"topic": "vocab", "type": "mcq", "q": "IMPASTO is a painting technique where:", "opts": ["Paint is thinned with water to create transparent washes", "Paint is applied thickly — sometimes with a palette knife — creating a raised, textured surface with visible marks", "Paint is applied smoothly with no visible brushstrokes", "A painting is made on paper rather than canvas"], "ans": 1, "explain": "Impasto: thick, heavy application of paint — often with a palette knife or stiff brush. Creates actual texture on the surface, with visible marks and ridges. Van Gogh used impasto extensively to create energy and expressiveness. Contrast with smooth, blended application."},
{"topic": "vocab", "type": "mcq", "q": "PERSPECTIVE in art refers to:", "opts": ["The emotional mood of an artwork", "Techniques used to create the illusion of depth and three-dimensional space on a 2D surface — including linear perspective (converging lines) and aerial perspective (distant things are cooler and less distinct)", "The subject matter of the painting", "The scale of different objects"], "ans": 1, "explain": "Perspective: creating the illusion of depth on a flat surface. Linear perspective: parallel lines converge to a vanishing point on the horizon. Aerial/atmospheric perspective: objects in the distance appear lighter, cooler, less detailed, and less saturated — mimics how atmosphere affects our view of distant things."},
{"topic": "vocab", "type": "mcq", "q": "FOCAL POINT in a composition means:", "opts": ["The background of a painting", "The area of an artwork that draws the viewer's eye first and commands the most attention — created through contrast, placement, detail, or colour", "The frame around a painting", "The style of the artwork"], "ans": 1, "explain": "Focal point: the main point of interest in a composition — where the viewer's eye is drawn first. Created by: contrast (light against dark, bright colour against neutral), position (rule of thirds, central placement), detail (more detailed areas draw the eye), converging lines, or scale."},
{"topic": "vocab", "type": "mcq", "q": "FORESHORTENING in drawing means:", "opts": ["Drawing something very small", "Distorting a form to show it coming towards or receding from the viewer — making parts closer to the viewer appear larger than those further away", "Drawing quickly", "Drawing using only outlines"], "ans": 1, "explain": "Foreshortening: a perspective technique where a form pointing towards the viewer appears compressed/distorted. An arm pointing directly at you appears shorter than its actual length. Used to create a powerful sense of depth and the illusion that forms project out of the picture plane."},
{"topic": "vocab", "type": "mcq", "q": "PRIMARY COLOURS in traditional colour theory are:", "opts": ["Red, green, and blue (RGB — used in light and screens)", "Red, yellow, and blue (RYB — traditional artist's colour theory, pigments)", "Green, orange, and purple", "Black, white, and grey"], "ans": 1, "explain": "Traditional primary colours (pigments): red, yellow, blue. Cannot be made by mixing other colours. Mix primaries to make secondaries: red+yellow=orange, yellow+blue=green, red+blue=purple. Note: in light (RGB) the primaries are different — red, green, blue. In printing (CMYK): cyan, magenta, yellow, black."},
{"topic": "vocab", "type": "mcq", "q": "ABSTRACT art is characterised by:", "opts": ["Realistic, highly detailed representation of subjects", "Work that departs from realistic representation — using form, colour, and line to express ideas or emotions without depicting recognisable objects", "Only geometric shapes", "Only black and white"], "ans": 1, "explain": "Abstract art: work that does not attempt to represent external reality accurately. Instead uses formal elements (colour, shape, line, texture) to express ideas, emotions, or aesthetic qualities. Ranges from semi-abstract (recognisable but simplified) to fully non-representational (no recognisable subject)."},
{"topic": "vocab", "type": "fillin", "q": "The technique of using contrasting light and dark to create the illusion of volume and depth is called _____ modelling.", "ans": "tonal", "explain": "Tonal modelling: using gradations from light to dark to suggest three-dimensional form. The light side of an object = highlight (lightest tone); the darkest area = shadow; the reflected light at the edge = reflected light. Together these tones create the illusion of a solid, three-dimensional object on a flat surface."},
{"topic": "vocab", "type": "fillin", "q": "Colours that are opposite each other on the colour wheel — such as red and green, or blue and orange — are called _____ colours.", "ans": "complementary", "explain": "Complementary colours: opposite on the colour wheel. They create maximum contrast and visual vibration when placed next to each other. Post-Impressionists like Van Gogh used complementary colour pairs to create vibrant, energetic effects. Artists also use complements to make colours appear more intense."},
{"topic": "influences", "type": "mcq", "q": "According to the SQA course spec, \"social and cultural influences\" on artists and designers includes which of the following?", "opts": ["Only the price of art materials", "Living conditions, family and community, other artists/art movements, exposure to different cultures, physical environment, technology, politics, gender, religion, world events, and personal circumstances", "Only what art school the artist attended", "Only their nationality"], "ans": 1, "explain": "SQA list of influences: living conditions (economic conditions), family and community, other artists/art movements, exposure to different cultures, physical environment/geography, new and emerging technology, politics, gender, religion/belief, national/world events, other fields (science, literature), personal circumstances, health and wellbeing."},
{"topic": "influences", "type": "mcq", "q": "In the SQA exam, when asked about influences (Part b), you must:", "opts": ["Simply name the influence and nothing else", "IDENTIFY a specific influence AND DESCRIBE how it can be seen in the artist's or designer's work — 1 mark for identifying, 1 mark for describing the effect", "Write a biography of the artist's life", "Name as many influences as possible without explaining any"], "ans": 1, "explain": "Part b marking: 1 mark for naming a SPECIFIC correct influence (e.g. \"influenced by Fauvism\" not just \"influenced by other artists\") + 1 mark for describing HOW that influence can be seen in the work (e.g. \"which led to his use of bold, non-naturalistic colours in his still life paintings\"). Both are needed for full marks."},
{"topic": "influences", "type": "mcq", "q": "The Impressionist movement in art was influenced by:", "opts": ["The discovery of oil paint in the 15th century", "The invention of portable paint tubes, which allowed artists to paint outdoors (en plein air), capturing natural light directly from observation", "The development of digital technology", "Religious patronage of the Church"], "ans": 1, "explain": "Impressionism (c.1860s-1880s) was significantly influenced by: the invention of collapsible metal paint tubes (allowed outdoor painting), Japanese woodblock prints (flat colour, unusual composition), new scientific understanding of colour and light, photography (new ways of seeing/framing), and rapid industrialisation/urban life."},
{"topic": "influences", "type": "mcq", "q": "Pop Art, associated with artists like Andy Warhol and Roy Lichtenstein, was influenced by:", "opts": ["Medieval religious iconography and church architecture", "Post-war consumer culture, mass media, advertising, television, and popular culture in 1950s-60s America and Britain", "Renaissance techniques and classical sculpture", "Abstract Expressionism's emotional brushwork"], "ans": 1, "explain": "Pop Art (1950s-60s): influenced by post-war consumer boom, mass production, advertising, television, comic books, and celebrity culture. Artists commented on (and celebrated/critiqued) commercial culture by incorporating its imagery and techniques into fine art. Warhol's Campbell's Soup Cans, Lichtenstein's Ben-Day dot comics."},
{"topic": "influences", "type": "mcq", "q": "The Scottish Colourists (Peploe, Cadell, Hunter, Fergusson) were influenced by:", "opts": ["German Expressionism and Soviet Constructivism", "French Post-Impressionism and Fauvism — particularly their use of bold colour, painterly technique, and subjects like landscapes, still life, and figures", "Dutch Golden Age portraiture and Baroque chiaroscuro", "Pre-Raphaelite symbolism"], "ans": 1, "explain": "The Scottish Colourists were heavily influenced by visits to France and exposure to French avant-garde painting — particularly Post-Impressionists like Cézanne, and Fauvists like Matisse. This influenced their bold, vibrant colour palettes, loose brushwork, and attention to formal qualities over narrative content."},
{"topic": "influences", "type": "mcq", "q": "In design history, the BAUHAUS school (Germany, 1919-1933) was influential because:", "opts": ["It revived historical ornamental decoration and craftsmanship", "It pioneered the idea that art and craft should be combined with industrial production — a functional, \"form follows function\" approach — influencing modern graphic design, architecture, and product design", "It introduced Impressionism to Germany", "It founded the Pop Art movement"], "ans": 1, "explain": "Bauhaus (founded by Walter Gropius, 1919): combined fine art, craft, and industrial design under the principle that design should serve function. (The phrase \"form follows function\" was coined by American architect Louis Sullivan in 1896, but became closely associated with Bauhaus and Modernism.) Hugely influential on modern design, typography, architecture, and education. Forced to close by the Nazis in 1933 — many staff emigrated and spread its influence worldwide."},
{"topic": "influences", "type": "mcq", "q": "How might POLITICAL influences affect an artist's work?", "opts": ["They would only affect the price of the artwork", "Political events, ideologies, censorship, war, or social upheaval can directly shape what an artist creates, what subjects they explore, and the emotional tone of their work — e.g. war imagery, protest art", "Politics only affects commercial design", "Political influences only affect photography"], "ans": 1, "explain": "Political influences on art: war can inspire powerful protest art (Picasso's Guernica — Spanish Civil War), political regimes can censor or commission art (Soviet Socialist Realism), and political ideologies can inspire movements (revolutionary art, feminist art). Artists often respond to or comment on the political world around them."},
{"topic": "influences", "type": "mcq", "q": "How might an artist's PERSONAL CIRCUMSTANCES influence their work?", "opts": ["Personal circumstances have no effect on an artist's work", "Personal experiences — illness, relationships, loss, travel, financial hardship, or joy — can profoundly shape the themes, mood, and subject matter an artist chooses to explore", "Only their formal education matters", "Only where they were born matters"], "ans": 1, "explain": "Personal circumstances directly influence art: Frida Kahlo's physical pain and disability was central to her self-portraits; Van Gogh's mental health struggles are reflected in his intense, emotional work; Picasso's relationships shaped his depiction of women. Personal circumstances can influence: subject matter, emotional tone, style, and the urgency of the work."},
{"topic": "influences", "type": "mcq", "q": "How might TECHNOLOGY influence a designer's work?", "opts": ["Technology has no impact on design", "New materials, manufacturing processes, digital tools, and software enable designers to create things previously impossible — e.g. 3D printing, CAD, digital illustration, new plastics and composites", "Only architects are affected by technology", "Technology only affects graphic designers"], "ans": 1, "explain": "Technology influences design profoundly: digital tools (Adobe Creative Suite, CAD) allow rapid prototyping and experimentation; new materials (carbon fibre, smart materials) create new functional possibilities; the internet changed graphic design for screens; 3D printing enables complex forms. Emerging technology is explicitly listed in the SQA course spec as an influence."},
{"topic": "influences", "type": "mcq", "q": "ART NOUVEAU (c.1890-1910) was influenced by:", "opts": ["Industrial mass production and minimalism", "Natural forms (plants, flowers, insects), Japanese art, and a rejection of industrial mass production — characterised by flowing organic lines, decorative surfaces, and integration of fine and applied arts", "Abstract Expressionism and Abstract art", "Pop Art and consumer culture"], "ans": 1, "explain": "Art Nouveau: influenced by organic natural forms (sinuous plant stems, peacock feathers, flowing hair), Japanese woodblock prints (flat colour, organic line), Celtic ornamentation, and a Romantic rejection of industrial ugliness. Key designers: Alphonse Mucha, Charles Rennie Mackintosh (Glasgow), René Lalique. Characterised by flowing, curved, organic lines."},
{"topic": "influences", "type": "fillin", "q": "In the SQA exam, to gain full marks for an influences question, you must IDENTIFY the influence AND _____ how it can be seen in the artist's or designer's work.", "ans": "describe", "explain": "The 4-mark influence question awards: 1 mark per specific influence identified (max 2) + 1 mark per description of how that influence can be seen in any of the artist's/designer's work (max 2). Simply listing influences without describing their effect on the work will gain only half the marks available."},
{"topic": "influences", "type": "fillin", "q": "The early 20th century art movement that used bold, non-naturalistic colour for expressive effect — influencing the Scottish Colourists — is called _____.", "ans": "Fauvism", "explain": "Fauvism (from \"les Fauves\" = \"the wild beasts\"): early 20th century movement led by Henri Matisse and André Derain. Used pure, intense, non-naturalistic colour for emotional and expressive purposes rather than to represent reality accurately. Had a major influence on Scottish Colourists, particularly Peploe and Fergusson."},
{"topic": "portfolio", "type": "mcq", "q": "In the Nat 5 Art and Design course, the EXPRESSIVE PORTFOLIO requires candidates to:", "opts": ["Design a product for a commercial client", "Produce investigative research responding to an agreed theme/stimulus, develop a single line of development, and produce a final expressive piece — plus an evaluation", "Write an essay about a famous artist", "Produce a design solution for a brief"], "ans": 1, "explain": "Expressive portfolio: (1) Investigative research — analytical drawings, studies responding to theme/stimulus. (2) Single line of development — showing visual continuity with research. (3) Final piece — realisation of the development. (4) Evaluation — justified personal opinions on decisions and effectiveness. Max 3 A2 sheets."},
{"topic": "portfolio", "type": "mcq", "q": "In the Nat 5 Art and Design course, the DESIGN PORTFOLIO requires candidates to:", "opts": ["Paint a portrait of a famous designer", "Produce investigative material and compile market research for a design brief, develop a single line of development, and produce a design solution — plus an evaluation", "Write a report about design history", "Produce an expressive final piece"], "ans": 1, "explain": "Design portfolio: (1) Investigative material and compiled market research — visual research, images of existing designs/competitor products. (2) Single line of development — showing visual continuity with research. (3) Design solution — the resolved design outcome. (4) Evaluation — justified opinions on decisions and the effectiveness of the design. Max 3 A2 sheets."},
{"topic": "portfolio", "type": "mcq", "q": "A \"SINGLE LINE OF DEVELOPMENT\" in a portfolio means:", "opts": ["The portfolio must only contain drawings in pencil", "A focused, coherent progression of ideas from initial research through to the final piece — showing how research and ideas have been developed and refined into one resolved outcome", "The portfolio must be presented in a straight line", "Only one material can be used throughout"], "ans": 1, "explain": "Single line of development: a focused creative journey showing how initial ideas have been progressively developed, refined, and resolved into a final outcome. It must show VISUAL CONTINUITY — the final piece should clearly connect to the research and development stages. Avoids scattered, unrelated explorations."},
{"topic": "portfolio", "type": "mcq", "q": "The EVALUATION in a portfolio requires candidates to:", "opts": ["Copy a description from an art book", "Express JUSTIFIED personal opinions on their creative decisions and the effectiveness of their work — explaining WHY they made decisions and evaluating how successfully the work achieves its aims", "List all the materials they used", "Copy the learning objectives"], "ans": 1, "explain": "Portfolio evaluation: personal, justified opinions on the creative process and outcomes. Must address: decisions made and why (justified), what worked well and why, what could be improved, how effectively the final work responds to the theme/brief. The SQA evaluation template is mandatory. No word count. Opinions must be JUSTIFIED, not just stated."},
{"topic": "portfolio", "type": "mcq", "q": "MARKET RESEARCH in the design portfolio involves:", "opts": ["Buying products from a market", "Researching existing designs, target audience preferences, competitor products, and market trends to inform the design solution — ensuring it is relevant and appropriate for its intended audience", "Only researching the history of design", "Only looking at the work of famous designers"], "ans": 1, "explain": "Market research: gathering information about the target audience, existing products, market trends, and competitors to ensure the design solution is relevant and appropriate. In the portfolio, candidates COMPILE market research — mainly images of existing designs and products, with notes on how designers have used colour, shape, materials and pattern. Informs functional and aesthetic design decisions."},
{"topic": "portfolio", "type": "mcq", "q": "ANALYTICAL DRAWING as part of the expressive portfolio involves:", "opts": ["Copying photographs exactly", "Close, careful observation and analysis of a subject — studying its form, structure, tonal qualities, texture, and surface characteristics in depth through drawing", "Quick, loose sketching", "Abstract mark-making only"], "ans": 1, "explain": "Analytical drawing: detailed, observational drawing that analyses the form, structure, tonal values, textures, and characteristics of a subject. Goes beyond copying — involves thinking carefully about what you are seeing. The foundation of investigative research in the expressive portfolio."},
{"topic": "portfolio", "type": "mcq", "q": "How many marks are awarded for the EXPRESSIVE PORTFOLIO in the overall course assessment?", "opts": ["40 marks", "20 marks", "100 marks", "50 marks"], "ans": 2, "explain": "Expressive portfolio = 100 marks (40% of total). Design portfolio = 100 marks (40% of total). Question paper = 40 marks scaled to 50 (20% of total). Total = 250 marks. Grade A–D based on combined performance across all three components."},
{"topic": "portfolio", "type": "mcq", "q": "In the portfolio assessment, the maximum physical size allowed for each portfolio is:", "opts": ["Seven A3 sheets (like the Design & Manufacture assignment)", "Three A2-sized, single-sided sheets (or equivalent)", "Ten A4 pages", "One A1 sheet"], "ans": 1, "explain": "Maximum portfolio size: three A2-sized, single-sided sheets or equivalent. Portfolios must fold to no larger than A1 for submission to SQA. The evaluation template is mandatory and should be attached to the first sheet without overlapping work or extending beyond the three A2 sheets."},
{"topic": "portfolio", "type": "fillin", "q": "The justified reflection on creative decisions and the effectiveness of the work that must be submitted with each portfolio is called an _____.", "ans": "evaluation", "explain": "The evaluation is a mandatory component of both portfolios. It must express JUSTIFIED personal opinions — not just describing what was done, but explaining why decisions were made and how effectively the work achieves its aims. The SQA provides a mandatory evaluation template. Centres must NOT provide model answers."},
{"topic": "portfolio", "type": "fillin", "q": "Research into target audience preferences, competitor products, and market trends to inform a design solution is called _____ research.", "ans": "market", "explain": "Market research informs the design portfolio by ensuring the design solution is appropriate for its intended audience and context. It demonstrates understanding of commercial design practice. In the Nat 5 portfolio, market research is compiled — mainly images of existing designs/products relevant to the brief, analysed for how they meet the needs of their target market."}
];

// Worksheets: kind = mcq (opts: [html, isCorrect]) | blanks (body html with inputs, ids, answers) | punnett | written (model answer in reveal)
const SHEETS=[
 {
  "title": "Expressive Art worksheet",
  "icon": "🎨",
  "keyAreas": "<strong>SQA Key Areas:</strong> Visual elements · Composition · Colour · Media &amp; techniques · Mood &amp; atmosphere · Tonal contrast · Exam technique",
  "sections": [
   {
    "head": "Section A — Visual Elements",
    "qs": [
     {
      "kind": "mcq",
      "label": "Q1 · Exam Technique",
      "text": "A student writes: \"The painting has dark colours and the figures are small.\" Will this gain a mark in the SQA exam?",
      "reveal": "<strong>B — No, purely descriptive responses do NOT gain marks.</strong> SQA marking principle: marks require JUSTIFIED responses, not description. The student must explain the EFFECT: e.g. \"The dark colours create an oppressive, threatening atmosphere, reinforcing the sense of danger in the scene.\"",
      "opts": [
       [
        "Yes — it correctly identifies two visual elements",
        false
       ],
       [
        "No — it is purely descriptive and does not justify the effect of these elements",
        true
       ],
       [
        "Yes — as long as the statement is correct it will always gain marks",
        false
       ],
       [
        "Yes — it mentions two separate points so gets 2 marks",
        false
       ]
      ]
     },
     {
      "kind": "mcq",
      "label": "Q2 · Multiple Choice",
      "text": "Which of the following responses about COLOUR would gain a mark in the SQA exam?",
      "reveal": "<strong>C — this is the only justified response.</strong> It: (1) identifies the specific colours, (2) names the type (cool tones), and (3) explains the EFFECT on mood. A, B, and D are all descriptive or vague — they identify colour without explaining its significance or effect.",
      "opts": [
       [
        "\"The painting uses blue and green colours.\"",
        false
       ],
       [
        "\"There is a lot of colour in this picture.\"",
        false
       ],
       [
        "\"Cool blue and green tones are used throughout, which create a calm, peaceful atmosphere and suggest the chill of the early morning light.\"",
        true
       ],
       [
        "\"The colours are nice and make the painting look good.\"",
        false
       ]
      ]
     },
     {
      "kind": "blanks",
      "label": "Q3 · Fill in the Blanks — Visual Elements",
      "text": "Complete the descriptions of key visual elements:",
      "reveal": "<strong>Tone</strong> = lightness/darkness. <strong>Composition</strong> = arrangement of elements. <strong>Media handling</strong> (or techniques) = how materials have been applied and their effect.",
      "body": "<input class=\"eq-in\" id=\"eqea3a\" placeholder=\"??????\"/> refers to the lightness or darkness of a colour, from highlight to shadow.<br/> <input class=\"eq-in\" id=\"eqea3b\" placeholder=\"?????????\"/> is the arrangement of elements within an artwork to create structure and lead the eye.<br/> <input class=\"eq-in\" id=\"eqea3c\" placeholder=\"???????\"/> describes how materials have been applied — e.g. thick impasto or fine detail.",
      "ids": [
       "eqea3a",
       "eqea3b",
       "eqea3c"
      ],
      "answers": [
       "tone",
       "composition",
       "media handling"
      ]
     },
     {
      "kind": "written",
      "label": "Q4 · Short Answer (4 marks)",
      "text": "Referring to an artist you have studied, identify TWO influences on their work and describe how each influence can be seen in any of their artworks. (4 marks — 1 mark per influence identified, 1 mark per description)",
      "reveal": "<strong>Model answer structure (example using Peploe):</strong><br/> Influence 1: <strong>Fauvism / French Post-Impressionism</strong> (specific — 1 mark)<br/> How seen: <strong>\"This influenced Peploe to use bold, non-naturalistic colour in his still life paintings, such as the vibrant reds and oranges in his paintings of roses, which are used for expressive effect rather than to accurately represent reality.\"</strong> (1 mark)<br/><br/> Influence 2: <strong>Cézanne's approach to structure and form</strong> (specific — 1 mark)<br/> How seen: <strong>\"Peploe adopted Cézanne's approach of using colour to build up form, visible in the way he uses planes of colour to suggest the rounded volume of fruit in his still life compositions.\"</strong> (1 mark)<br/><br/> Note: \"influenced by French artists\" is NOT specific enough — you must name the movement/artist.",
      "placeholder": "Influence 1: [Name specific influence]\nHow it can be seen: [Describe effect on the work]\n\nInfluence 2: [Name specific influence]\nHow it can be seen: [Describe effect on the work]",
      "tall": false
     },
     {
      "kind": "mcq",
      "label": "Q5 · Multiple Choice",
      "text": "WARM colours in colour theory are associated with which qualities?",
      "reveal": "<strong>B — reds, oranges, and yellows.</strong> Warm colours appear to advance in a composition and are associated with warmth, energy, fire, and passion. Cool colours (blues, greens, purples) recede and feel calm or cold. This warm/cool contrast can create depth, mood, and visual interest in an artwork.",
      "opts": [
       [
        "Blues, greens, and purples — associated with calm and cold",
        false
       ],
       [
        "Reds, oranges, and yellows — appear to advance, create energy and warmth",
        true
       ],
       [
        "Blacks, whites, and greys — neutral tones",
        false
       ],
       [
        "All bright colours regardless of hue",
        false
       ]
      ]
     }
    ]
   }
  ]
 },
 {
  "title": "Design worksheet",
  "icon": "✏️",
  "keyAreas": "<strong>SQA Key Areas:</strong> Function · Fitness for purpose · Target market · Visual impact · Style · Materials &amp; techniques · Layout · Typography",
  "sections": [
   {
    "head": "Section A — Design Issues",
    "qs": [
     {
      "kind": "mcq",
      "label": "Q1 · Multiple Choice",
      "text": "A poster has bold typography, high-contrast colours, and a large striking image. Which design issue does this BEST demonstrate?",
      "reveal": "<strong>B — Visual impact.</strong> Visual impact is the immediate, powerful impression a design makes — how strongly it grabs attention. Bold typography, high contrast, and striking imagery all contribute to strong visual impact. Particularly important in advertising and communication design where you have only seconds to attract attention.",
      "opts": [
       [
        "Function — it works as intended",
        false
       ],
       [
        "Visual impact — it immediately grabs the viewer's attention",
        true
       ],
       [
        "Fitness for purpose — it fulfils its brief",
        false
       ],
       [
        "Materials and techniques — it uses specific production methods",
        false
       ]
      ]
     },
     {
      "kind": "written",
      "label": "Q2 · Short Answer (2 marks)",
      "text": "Explain what is meant by TARGET MARKET in design and explain why it is important. (2 marks)",
      "reveal": "<strong>Model answer:</strong><br/> Target market = <strong>the specific group of people the design is aimed at</strong> — defined by factors such as age, gender, lifestyle, interests, and income level. (1 mark)<br/> Important because: <strong>all design decisions (aesthetics, materials, scale, price, communication approach) must be appropriate for this audience</strong> — a design that does not suit its target market will fail commercially. (1 mark)",
      "placeholder": "Definition of target market:\nWhy it is important:",
      "tall": false
     },
     {
      "kind": "blanks",
      "label": "Q3 · Fill in the Blanks — Design Issues",
      "text": "",
      "reveal": "<strong>Function</strong> = what it does. <strong>Fitness for purpose</strong> = successfully achieves its function for its users. <strong>Layout</strong> = organisation of elements to guide the viewer and communicate the message.",
      "body": "<input class=\"eq-in\" id=\"eqds3a\" placeholder=\"????????\"/> refers to WHAT the product is designed to do — its intended purpose.<br/> <input class=\"eq-in\" id=\"eqds3b\" placeholder=\"??????? ??? ???????\"/> means the design successfully fulfils its function for its intended users in its intended context.<br/> The way text, images and space are organised in a design to guide the viewer is called <input class=\"eq-in\" id=\"eqds3c\" placeholder=\"??????\"/>.",
      "ids": [
       "eqds3a",
       "eqds3b",
       "eqds3c"
      ],
      "answers": [
       "function",
       "fitness for purpose",
       "layout"
      ]
     },
     {
      "kind": "mcq",
      "label": "Q4 · Multiple Choice",
      "text": "Which design area would you MOST likely discuss when analysing a shopping bag, cereal box, or company logo?",
      "reveal": "<strong>A — Graphic/communication design.</strong> This includes: logos, posters, packaging, advertising, book covers, websites, and signage. Key design issues: visual communication, typography, colour, layout, imagery, and how effectively it communicates to the target audience.",
      "opts": [
       [
        "Graphic/communication design",
        true
       ],
       [
        "Architectural design",
        false
       ],
       [
        "Jewellery design",
        false
       ],
       [
        "Interior design",
        false
       ]
      ]
     }
    ]
   }
  ]
 },
 {
  "title": "Influences worksheet",
  "icon": "🌍",
  "keyAreas": "<strong>SQA Key Areas:</strong> Social, cultural &amp; other influences · Art movements · Specific artists &amp; designers · How influences affect practice",
  "sections": [
   {
    "head": "Section A — Art Movements",
    "qs": [
     {
      "kind": "mcq",
      "label": "Q1 · Multiple Choice",
      "text": "The IMPRESSIONIST movement (c.1860s–1880s) was significantly influenced by the invention of collapsible metal paint tubes. Why?",
      "reveal": "<strong>B — en plein air painting.</strong> Before portable paint tubes, artists mixed paint in pots and had to work in studios. Collapsible metal tubes (invented 1841) let artists take paint outdoors. This technological influence directly enabled Impressionism's core practice of capturing changing natural light directly from observation.",
      "opts": [
       [
        "It allowed artists to use metallic colours for the first time",
        false
       ],
       [
        "Artists could now paint outdoors (en plein air), directly observing natural light — instead of being tied to the studio",
        true
       ],
       [
        "It made paint cheaper so more people could become artists",
        false
       ],
       [
        "It allowed paint to be applied more thickly in impasto technique",
        false
       ]
      ]
     },
     {
      "kind": "mcq",
      "label": "Q2 · Multiple Choice",
      "text": "POP ART (1950s–60s) was influenced by which social and cultural developments?",
      "reveal": "<strong>B — consumer culture and mass media.</strong> Pop Art emerged in 1950s Britain and 1960s USA, directly responding to post-war consumerism, mass production, advertising, television, and celebrity culture. Artists like Warhol and Lichtenstein incorporated commercial imagery (soup cans, comic strips, advertising techniques) into fine art.",
      "opts": [
       [
        "Medieval religious iconography and church architecture",
        false
       ],
       [
        "Post-war consumer culture, mass media, advertising, television, and popular culture",
        true
       ],
       [
        "Japanese woodblock printing and Eastern art traditions",
        false
       ],
       [
        "Renaissance techniques and classical Greek sculpture",
        false
       ]
      ]
     },
     {
      "kind": "written",
      "label": "Q3 · Short Answer (3 marks)",
      "text": "Name THREE different types of influence (from the SQA list) that can affect an artist or designer's work, and give a brief example of each.",
      "reveal": "<strong>Model answer (1 mark each, any 3 from SQA list):</strong><br/> • <strong>Other artists/art movements</strong>: e.g. the Colourists were influenced by Fauvism, leading to their bold use of non-naturalistic colour. (1)<br/> • <strong>National/world events</strong>: e.g. Picasso created Guernica in response to the bombing of a Basque town during the Spanish Civil War. (1)<br/> • <strong>Personal circumstances</strong>: e.g. Frida Kahlo's physical injuries from a bus accident became the central theme of her self-portraits. (1)<br/> • <strong>Technology</strong>: e.g. digital tools allow graphic designers to create complex layouts and illustrations more efficiently than by hand. (1)",
      "placeholder": "Influence type 1 + example:\nInfluence type 2 + example:\nInfluence type 3 + example:",
      "tall": false
     },
     {
      "kind": "mcq",
      "label": "Q4 · Multiple Choice",
      "text": "The BAUHAUS school (Germany 1919–1933) was influential in design because it:",
      "reveal": "<strong>B — form follows function.</strong> Bauhaus (founded 1919 by Walter Gropius) united fine art, craft, and industrial design. Its functional approach — summed up by \"form follows function\" (a phrase coined by architect Louis Sullivan and adopted as a Modernist motto), meaning design should be determined by purpose, not decoration — profoundly influenced modern graphic design, architecture, typography, and product design worldwide.",
      "opts": [
       [
        "Revived historical ornamental decoration",
        false
       ],
       [
        "Combined art, craft, and industrial design with a functional, \"form follows function\" approach — influencing modern design worldwide",
        true
       ],
       [
        "Founded the Impressionist movement",
        false
       ],
       [
        "Introduced Pop Art to Germany",
        false
       ]
      ]
     }
    ]
   }
  ]
 }
];

// Key facts reference
const FACTS=[
 {
  "h": "🎨 Expressive Visual Elements",
  "cards": [
   [
    "Colour",
    "Hue (colour name) · Tone (lightness/darkness) · Saturation (intensity/purity)<br/>Warm colours (red/orange/yellow): advance, energetic<br/>Cool colours (blue/green/purple): recede, calm<br/>Complementary colours: opposite on colour wheel — maximum contrast<br/>Harmonious colours: adjacent on colour wheel — unified effect"
   ],
   [
    "Line",
    "Defines edges and outlines · Creates direction and movement<br/>Horizontal = calm/stable · Vertical = strength/height<br/>Diagonal = movement/tension · Curved = flowing/organic<br/>Jagged = energy/aggression · Gestural = spontaneous/expressive"
   ],
   [
    "Tone",
    "Range from lightest highlight to darkest shadow<br/>Creates illusion of 3D form (tonal modelling)<br/>Tonal contrast: dramatic (high contrast) or subtle (low contrast)<br/>Chiaroscuro: extreme light/dark contrast (Caravaggio, Rembrandt)"
   ],
   [
    "Texture",
    "Actual texture: physically felt on surface (impasto, collage, sculpture)<br/>Implied texture: visual illusion on 2D surface (hatching, stippling, mark-making)<br/>Impasto: thick paint application — creates raised, tactile surface<br/>Describes HOW the material has been applied"
   ],
   [
    "Shape &amp; Form",
    "Shape: 2D, flat (circle, triangle, organic shape)<br/>Form: 3D, has volume and mass (sphere, cube, organic form)<br/>Geometric: mathematical, precise · Organic: natural, irregular<br/>Form created in 2D through tonal modelling and perspective"
   ],
   [
    "Pattern",
    "Repetition of visual elements (shape, line, colour, texture)<br/>Regular: geometric, predictable · Irregular: varied, organic<br/>Creates rhythm, visual interest, cultural identity<br/>Central to textile design, decorative arts, and many painting traditions"
   ],
   [
    "Composition, Scale &amp; Other Elements",
    "Composition: arrangement of elements — focal point, balance, perspective, viewpoint<br/>Scale: relative size — creates emphasis, depth, visual hierarchy<br/>Style: distinctive visual characteristics of an artist or movement<br/>Mood &amp; Atmosphere: emotional quality — HOW was it achieved?<br/>Visual Impact: how powerfully it grabs the viewer's attention"
   ]
  ]
 },
 {
  "h": "✏️ Design Elements &amp; Issues",
  "cards": [
   [
    "Function &amp; Fitness for Purpose",
    "Function: what the product/design is made to DO<br/>Fitness for purpose: does it successfully achieve its function for its intended users?<br/>Must consider: safety, durability, ease of use, appropriateness for target market"
   ],
   [
    "Target Market",
    "The specific group the design is aimed at<br/>Influences: aesthetics, materials, price, scale, communication approach<br/>Research into: age, lifestyle, income, interests, needs<br/>All design decisions should be tailored to the target market"
   ],
   [
    "Layout &amp; Typography",
    "Layout: organisation of text, images, space to guide the viewer<br/>Visual hierarchy: most → least important; guides reading order<br/>Typography: typeface choice, size, weight, spacing, colour<br/>Serif = traditional · Sans-serif = modern · Script = elegant/personal"
   ],
   [
    "Design Areas (Question Paper)",
    "Graphics/communication design: logos, posters, packaging, advertising<br/>Product design: furniture, appliances, tools, electronics<br/>Interior/environmental/architectural design: spaces and buildings<br/>Jewellery design: wearable decorative objects<br/>Fashion/textiles: clothing, fabric, pattern design"
   ]
  ]
 },
 {
  "h": "🌍 Key Influences on Artists &amp; Designers",
  "cards": [
   [
    "SQA List of Influences",
    "Living conditions (economic) · Family and community · Other artists/art movements<br/>Exposure to different cultures · Physical environment/geography<br/>New and emerging technology · Politics · Gender<br/>Religion/belief · National/world events<br/>Other fields (science, literature) · Personal circumstances · Health and wellbeing"
   ],
   [
    "How to Answer Influences Questions",
    "IDENTIFY the specific influence (1 mark): e.g. \"Peploe was influenced by the Fauves\"<br/>DESCRIBE how it can be seen in the work (1 mark): e.g. \"which led to his use of bold, non-naturalistic colour in his still life paintings\"<br/>= 2 marks per influence, 4 marks total (2 influences required)"
   ],
   [
    "Key Art Movements",
    "Impressionism: capturing light, loose brushwork, en plein air (1860s–80s)<br/>Post-Impressionism: personal expression, structure, bold colour (1880s–90s)<br/>Fauvism: bold non-naturalistic colour for expression (c.1905)<br/>Expressionism: emotional distortion and intense colour (1905–30s)<br/>Cubism: multiple viewpoints simultaneously (c.1908)<br/>Art Nouveau: organic forms, flowing lines, craft (1890–1910)<br/>Bauhaus: function + craft + industrial design (1919–33)<br/>Pop Art: consumer culture, mass media imagery (1950s–60s)"
   ],
   [
    "Scottish Artists to Know",
    "Scottish Colourists: Peploe, Cadell, Hunter, Fergusson<br/>Influenced by: Fauvism, Post-Impressionism, French avant-garde<br/>Known for: vibrant colour, painterly technique, still life, landscapes, figures<br/>Charles Rennie Mackintosh: Art Nouveau architect/designer, Glasgow Style"
   ]
  ]
 },
 {
  "h": "📋 Exam Technique &amp; Portfolio",
  "cards": [
   [
    "Question Paper Structure",
    "One paper · 1 hour 20 minutes · 40 marks (scaled to 50 = 20% of the course)<br/>Section 1: Expressive Art Studies — 20 marks<br/> Q1 (mandatory, 10 marks): your studied artist — 3 prompts for part (a) + influences for part (b)<br/> Q2–6 (optional, pick ONE, 10 marks): unseen artwork<br/>Section 2: Design Studies — 20 marks<br/> Q7 (mandatory, 10 marks): your studied designer<br/> Q8–12 (optional, pick ONE, 10 marks): unseen design"
   ],
   [
    "How to Write Justified Answers",
    "DESCRIBE the visual element → EXPLAIN its EFFECT<br/>❌ \"The painting has bright colours.\" (0 marks — description only)<br/>✅ \"The artist used warm, vibrant reds and oranges which contrast with the cool blues, creating a sense of depth and drawing the viewer's eye to the focal point.\" (mark awarded)<br/>Always ask: WHY? WHAT EFFECT does it have?"
   ],
   [
    "Portfolio Requirements",
    "Both portfolios max 3 A2-sized single-sided sheets (must fold to A1)<br/>Expressive portfolio: theme → research → line of development → final piece → evaluation<br/>Design portfolio: brief → research + market research → line of development → solution → evaluation<br/>Evaluation: mandatory SQA template — justified personal opinions"
   ]
  ]
 }
];

// Mock exams: questions drawn at random from the whole bank, 1 mark each
const MOCK_INTRO="Quick-fire practice sets drawn from the whole question bank. The real SQA exam is <strong>one question paper</strong>: 1 hour 20 minutes · 40 marks (scaled to 50) · Section 1 Expressive Art Studies (20 marks) and Section 2 Design Studies (20 marks) — in each section answer the mandatory question plus ONE optional question.";
const MOCK_PAPERS=[{"key": "paper1", "title": "Practice Set 1 — Mixed Questions", "short": "Set 1", "desc": "25 questions · 30 minutes · all units", "n": 25, "mins": 30}, {"key": "paper2", "title": "Practice Set 2 — Mixed Questions", "short": "Set 2", "desc": "25 questions · 40 minutes · all units", "n": 25, "mins": 40}];
const MOCK_GRADES=[{"min": 70, "grade": "A", "msg": "Outstanding! An A-grade performance."}, {"min": 60, "grade": "B", "msg": "Well done! Review the questions you dropped to push for an A."}, {"min": 50, "grade": "C", "msg": "Good effort! Target your weakest topics to move up."}, {"min": 40, "grade": "D", "msg": "Keep revising — use Smart Mix to work on the topics you found hardest."}, {"min": 0, "grade": "No Award", "msg": "Don't give up! Review your answers, then try again."}];

const EXAM_TIPS=[
 [
  "🎨",
  "<strong>Never just DESCRIBE — always JUSTIFY.</strong> \"The painting uses dark colours\" = 0 marks. \"The dark, sombre colours create a heavy, oppressive mood, reinforcing the sense of grief in the scene\" = 1 mark. Always explain the EFFECT of the visual element."
 ],
 [
  "🔬",
  "<strong>Learn the key terms</strong> — key art vocabulary, visual elements, design issues, and influences are common exam questions."
 ],
 [
  "📊",
  "<strong>Show your reasoning</strong> — 1 mark for each justified point. Watch for the Nat 5 command words: \"identify\", \"describe\" and \"comment on\". For the 2-mark opinion in an optional question, give two separate justified reasons."
 ],
 [
  "⏱",
  "<strong>Manage your time</strong> — if stuck, move on and come back. Never leave a blank — an attempt may get a mark."
 ]
];
const LINKS=[
 [
  "https://www.sqa.org.uk/sqa/47388.html",
  "SQA — Nat 5 Art &amp; Design",
  "Official past papers, marking schemes &amp; course spec"
 ],
 [
  "https://www.bbc.co.uk/bitesize/subjects/zts3kqt",
  "BBC Bitesize — Nat 5 Art &amp; Design",
  "Videos, notes and revision for every topic"
 ],
 [
  "https://scholar.hw.ac.uk",
  "SCHOLAR (Heriot-Watt)",
  "Detailed online courses for Scottish Nat 5 subjects"
 ],
 [
  "https://www.understandingstandards.org.uk/Subjects/ArtandDesign",
  "Understanding Standards",
  "SQA exemplar answers and marking guidance"
 ],
 [
  "https://www.sqa.org.uk/pastpapers/findpastpaper.htm?level=N5&subject=Art+and+Design",
  "SQA — Past Papers &amp; Specimen Papers",
  "Past question papers and marking instructions for Art &amp; Design"
 ]
];
const ABOUT="Covers all areas of the SQA Nat 5 Art &amp; Design question paper: Expressive Art Studies, Design Studies, Art &amp; Design Vocabulary, Influences, and Portfolio &amp; Process.<br/><br/> ✅ Verified against SQA Course Spec <strong>C804 75</strong> (version 4.0, September 2026 — valid from 2026–27).<br/><br/> 64 practice questions · 3 interactive worksheets (13 questions) · Mock exams · Flashcards · Timed challenge · Art vocabulary reference.<br/><br/> Progress saves automatically in your browser — nothing is sent anywhere. Not affiliated with the SQA.";
