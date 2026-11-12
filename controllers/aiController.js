const generateRecipeSuggestions = async (req, res) => {
    try {
        const { ingredients } = req.body

        
        if (!ingredients || (Array.isArray(ingredients) && ingredients.length === 0)) {
            return res.status(400).json({
                success: false,
                message: "Please provide ingredients."
            });
        }

        
        const { GoogleGenAI } = await import("@google/genai");

        
        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY
        });

        
        const prompt = `
            Suggest 3 recipes using these ingredients: ${Array.isArray(ingredients) ? ingredients.join(", ") : ingredients}.

            For each recipe, provide:
            1. Recipe name
            2. Short description
            3. Ingredients required
            4. Step-by-step cooking instructions
            5. Cooking time

            Suggest simple and practical recipes.
        `;

        
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: prompt
        });

        
        res.status(200).json({
            success: true,
            message: "Recipe suggestions generated successfully!",
            suggestions: response.text
        });

    } catch (error) {
        console.error("AI Recipe Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Unable to generate recipe suggestions. Please try again."
        });
    }
};

module.exports = { generateRecipeSuggestions }