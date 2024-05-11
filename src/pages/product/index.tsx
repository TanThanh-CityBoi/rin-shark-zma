import { ProductItem } from "components/product/item";
import React, { FC, Suspense } from "react";
import { useRecoilValue } from "recoil";
import {
  categoriesState,
  productsByCategoryState,
  selectedCategoryIdState,
} from "state";
import { Box, Header, Icon, Page, Tabs, Text } from "zmp-ui";

const CategoryPicker: FC = () => {
  const categories = useRecoilValue(categoriesState);
  const selectedCategory = useRecoilValue(selectedCategoryIdState);
  return (
    <Tabs
      scrollable
      defaultActiveKey={selectedCategory}
      className="category-tabs rounded-md"
    >
      {categories.map((category) => (
        <Tabs.Tab key={category.id} label={category.name}>
          <Suspense>
            <CategoryProducts categoryId={category.id} />
          </Suspense>
        </Tabs.Tab>
      ))}
    </Tabs>
  );
};

const CategoryProducts: FC<{ categoryId: string }> = ({ categoryId }) => {
  const productsByCategory = useRecoilValue(
    productsByCategoryState(categoryId)
  );

  if (productsByCategory.length === 0) {
    return (
      <Box className="flex-1 p-4 flex justify-center items-center bg-[#f5f5f5]">
        <Text size="xSmall" className="text-gray">
          Không có sản phẩm trong danh mục
        </Text>
      </Box>
    );
  }
  return (
    <Box className="grid grid-cols-2 gap-4 p-4 bg-[#f5f5f5]">
      {productsByCategory.map((product) => (
        <Box className="neumorphism-flat-xs rounded-md p-2" key={product.id}>
          <ProductItem product={product} />
        </Box>
      ))}
    </Box>
  );
};

const ProductPage: FC = () => {
  return (
    <Page className="flex flex-col">
      <Header
        title="Sản phẩm"
        backIcon={<Icon icon="zi-chevron-left" className="text-white"></Icon>}
        className="bg-warning-600 text-white"
      />
      <CategoryPicker />
    </Page>
  );
};

export default ProductPage;
