/*
 *
 * HomePage
 *
 */

import React, { memo, useState, useEffect } from "react";

import { useNotification } from "@strapi/helper-plugin";
import {
  BaseHeaderLayout,
  ContentLayout,
  Typography,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
} from "@strapi/design-system";
import PaperPlane from "@strapi/icons/PaperPlane";

import {
  getRevalidatePaths,
  revalidateAllPaths,
  revalidatePath,
} from "../../utils/api";

const HomePage = () => {
  const toggleNotification = useNotification();
  const [isLoading, setIsLoading] = useState(-1);
  const [paths, setPaths] = useState([]);

  const revalidate = (p) => {
    setIsLoading(p.id);
    revalidatePath(p.path)
      .then((res) => {
        toggleNotification({
          id: p.id,
          blockTransition: true,
          type: "success",
          message: res.data.message,
        });
      })
      .catch((res) => {
        toggleNotification({
          id: p.id,
          blockTransition: true,
          type: "warning",
          message: res.response.data.error.message,
        });
      })
      .finally(() => {
        setIsLoading(-1);
      });
  };

  const revalidateAll = () => {
    setIsLoading(0);
    revalidateAllPaths()
      .then((res) => {
        toggleNotification({
          id: 0,
          blockTransition: true,
          type: "success",
          message: res.data.message,
        });
      })
      .catch((res) => {
        toggleNotification({
          id: 0,
          blockTransition: true,
          type: "warning",
          message: res.response.data.error.message,
        });
      })
      .finally(() => {
        setIsLoading(-1);
      });
  };

  useEffect(() => {
    getRevalidatePaths().then((d) => setPaths(d));
  }, []);

  return (
    <>
      <BaseHeaderLayout
        title="NextJS Revalidate"
        subtitle="Revalidate your NextJS frontend"
        as="h2"
        primaryAction={
          <Button startIcon={<PaperPlane />} onClick={revalidateAll}>
            Revalidate all paths
          </Button>
        }
      />
      <ContentLayout>
        <Table colCount={3} rowCount={paths.length}>
          <Thead>
            <Tr>
              <Th>
                <Typography variant="sigma">Name</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Path</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Actions</Typography>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {paths.map((p) => (
              <Tr key={p.id}>
                <Td>
                  <Typography textColor="neutral800">{p.name}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{p.path}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    <Button
                      size="S"
                      onClick={() => revalidate(p)}
                      loading={isLoading === p.id || isLoading === 0}
                    >
                      Revalidate
                    </Button>
                  </Typography>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ContentLayout>
    </>
  );
};

export default memo(HomePage);
