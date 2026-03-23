function App() {

    function signUp(formData) { 
        const data = Object.fromEntries(formData)
        const dietaryRestrictions = formData.getAll("dietaryRestrictions")
        const allData = {
            ...data,
            dietaryRestrictions
        }
    }

    return (
        <section className="container">
            <h2>Inscription</h2>
            
            <form action={signUp} className="form">
                
                <label htmlFor="email">Email :</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="john-doe@exemple.com"
                />

                <label htmlFor="password">Mot de passe :</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password"
                />
                
                
                <label htmlFor="description">Description :</label>
                <textarea id="description" name="description"></textarea>
                
                <fieldset>
                
                    <legend>Statut professionnel :</legend>
                    
                    <label>
                        <input 
                            type="radio" 
                            name="employmentStatus" 
                            value="unemployed" 
                        />
                        Sans emploi
                    </label>
                    
                    <label>
                        <input 
                            type="radio" 
                            name="employmentStatus" 
                            value="part-time" 
                        />
                        Temps partiel
                    </label>
                    
                    <label>
                        <input 
                            type="radio" 
                            name="employmentStatus" 
                            defaultChecked={true} 
                            value="full-time" 
                        />
                        Temps plein
                    </label>
                
                </fieldset>

                <fieldset>
                    
                    <legend>Restrictions alimentaires :</legend>
                    
                    <label>
                        <input 
                            type="checkbox" 
                            name="dietaryRestrictions" 
                            value="kosher" 
                        />
                        Cachère
                    </label>
                    
                    <label>
                        <input 
                            type="checkbox" 
                            name="dietaryRestrictions" 
                            value="vegan" 
                        />
                        Vegan
                    </label>
                    
                    <label>
                        <input 
                            type="checkbox" 
                            name="dietaryRestrictions" 
                            defaultChecked={true} 
                            value="gluten-free" 
                        />
                        Sans Gluten
                    </label>
                
                </fieldset>

                <button className="submit-btn">Inscription</button>
            </form>
        </section>
    )
}

export default App