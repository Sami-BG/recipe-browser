import * as React from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import './SearchPage.css';
class SearchPage extends React.Component {

    render() {
        return (
            <div className={'search-page'}>
                <RecipeCard recipe_title={"Lorem Ipsum with a bunch of other stuff"}
                            recipe_url={'https://github.com/'}
                            recipe_img={'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'}
                            available_ingredients={['Eggs', 'Tomatoes', 'Peppers', 'Onions']}
                            unavailable_ingredients={['Paprika', 'Sour cream', 'Pita bread']}/>
                <RecipeCard recipe_title={"Lorem Ipsum with a bunch of other stuff"}
                            recipe_url={'https://github.com/'}
                            recipe_img={'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'}
                            available_ingredients={['Eggs', 'Tomatoes', 'Peppers', 'Onions']}
                            unavailable_ingredients={['Paprika', 'Sour cream', 'Pita bread']}/>
                <RecipeCard recipe_title={"Lorem Ipsum with a bunch of other stuff"}
                            recipe_url={'https://github.com/'}
                            recipe_img={'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'}
                            available_ingredients={['Eggs', 'Tomatoes', 'Peppers', 'Onions']}
                            unavailable_ingredients={['Paprika', 'Sour cream', 'Pita bread']}/>
            </div>
        )
    }
}

export default SearchPage;