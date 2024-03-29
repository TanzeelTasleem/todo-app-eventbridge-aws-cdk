"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
// If you don't want to use TypeScript you can delete this file!
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const layout_1 = require("../components/layout");
const seo_1 = require("../components/seo");
const UsingTypescript = ({ data, path }) => (<layout_1.default>
    <seo_1.default title="Using TypeScript"/>
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>This means that you can create and write <em>.ts/.tsx</em> files for your pages, components etc. Please note that the <em>gatsby-*.js</em> files (like gatsby-node.js) currently don't support TypeScript yet.</p>
    <p>For type checking you'll want to install <em>typescript</em> via npm and run <em>tsc --init</em> to create a <em>.tsconfig</em> file.</p>
    <p>You're currently on the page "{path}" which was built on {data.site.buildTime}.</p>
    <p>To learn more, head over to our <a href="https://www.gatsbyjs.com/docs/typescript/">documentation about TypeScript</a>.</p>
    <gatsby_1.Link to="/">Go back to the homepage</gatsby_1.Link>
  </layout_1.default>);
exports.default = UsingTypescript;
exports.query = gatsby_1.graphql `
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNpbmctdHlwZXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzaW5nLXR5cGVzY3JpcHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdFQUFnRTtBQUNoRSxpQ0FBeUI7QUFDekIsbUNBQWlEO0FBRWpELGlEQUF5QztBQUN6QywyQ0FBbUM7QUFRbkMsTUFBTSxlQUFlLEdBQW1DLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQzFFLENBQUMsZ0JBQU0sQ0FDTDtJQUFBLENBQUMsYUFBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFDN0I7SUFBQSxDQUFDLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxFQUFFLENBQzlDO0lBQUEsQ0FBQyxDQUFDLENBQUMseUNBQXlDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUUsNERBQTJELENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUUsb0VBQW1FLEVBQUUsQ0FBQyxDQUNwTjtJQUFBLENBQUMsQ0FBQyxDQUFDLHlDQUF5QyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFFLGlCQUFnQixDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFFLGFBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBRSxNQUFLLEVBQUUsQ0FBQyxDQUMzSTtJQUFBLENBQUMsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUNyRjtJQUFBLENBQUMsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsMkNBQTJDLENBQUMsOEJBQThCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQzdIO0lBQUEsQ0FBQyxhQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxhQUFJLENBQzVDO0VBQUEsRUFBRSxnQkFBTSxDQUFDLENBQ1YsQ0FBQTtBQUVELGtCQUFlLGVBQWUsQ0FBQTtBQUVqQixRQUFBLEtBQUssR0FBRyxnQkFBTyxDQUFBOzs7Ozs7Q0FNM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIElmIHlvdSBkb24ndCB3YW50IHRvIHVzZSBUeXBlU2NyaXB0IHlvdSBjYW4gZGVsZXRlIHRoaXMgZmlsZSFcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgUGFnZVByb3BzLCBMaW5rLCBncmFwaHFsIH0gZnJvbSBcImdhdHNieVwiXG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBTRU8gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VvXCJcblxudHlwZSBEYXRhUHJvcHMgPSB7XG4gIHNpdGU6IHtcbiAgICBidWlsZFRpbWU6IHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFVzaW5nVHlwZXNjcmlwdDogUmVhY3QuRkM8UGFnZVByb3BzPERhdGFQcm9wcz4+ID0gKHsgZGF0YSwgcGF0aCB9KSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPFNFTyB0aXRsZT1cIlVzaW5nIFR5cGVTY3JpcHRcIiAvPlxuICAgIDxoMT5HYXRzYnkgc3VwcG9ydHMgVHlwZVNjcmlwdCBieSBkZWZhdWx0ITwvaDE+XG4gICAgPHA+VGhpcyBtZWFucyB0aGF0IHlvdSBjYW4gY3JlYXRlIGFuZCB3cml0ZSA8ZW0+LnRzLy50c3g8L2VtPiBmaWxlcyBmb3IgeW91ciBwYWdlcywgY29tcG9uZW50cyBldGMuIFBsZWFzZSBub3RlIHRoYXQgdGhlIDxlbT5nYXRzYnktKi5qczwvZW0+IGZpbGVzIChsaWtlIGdhdHNieS1ub2RlLmpzKSBjdXJyZW50bHkgZG9uJ3Qgc3VwcG9ydCBUeXBlU2NyaXB0IHlldC48L3A+XG4gICAgPHA+Rm9yIHR5cGUgY2hlY2tpbmcgeW91J2xsIHdhbnQgdG8gaW5zdGFsbCA8ZW0+dHlwZXNjcmlwdDwvZW0+IHZpYSBucG0gYW5kIHJ1biA8ZW0+dHNjIC0taW5pdDwvZW0+IHRvIGNyZWF0ZSBhIDxlbT4udHNjb25maWc8L2VtPiBmaWxlLjwvcD5cbiAgICA8cD5Zb3UncmUgY3VycmVudGx5IG9uIHRoZSBwYWdlIFwie3BhdGh9XCIgd2hpY2ggd2FzIGJ1aWx0IG9uIHtkYXRhLnNpdGUuYnVpbGRUaW1lfS48L3A+XG4gICAgPHA+VG8gbGVhcm4gbW9yZSwgaGVhZCBvdmVyIHRvIG91ciA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2F0c2J5anMuY29tL2RvY3MvdHlwZXNjcmlwdC9cIj5kb2N1bWVudGF0aW9uIGFib3V0IFR5cGVTY3JpcHQ8L2E+LjwvcD5cbiAgICA8TGluayB0bz1cIi9cIj5HbyBiYWNrIHRvIHRoZSBob21lcGFnZTwvTGluaz5cbiAgPC9MYXlvdXQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFVzaW5nVHlwZXNjcmlwdFxuXG5leHBvcnQgY29uc3QgcXVlcnkgPSBncmFwaHFsYFxuICB7XG4gICAgc2l0ZSB7XG4gICAgICBidWlsZFRpbWUoZm9ybWF0U3RyaW5nOiBcIllZWVktTU0tREQgaGg6bW0gYSB6XCIpXG4gICAgfVxuICB9XG5gXG4iXX0=