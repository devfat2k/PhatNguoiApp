import React, { FC, useMemo, useState, Suspense } from 'react';
import { Image, ImageProps, ImageURISource, StyleSheet, View, ViewStyle } from 'react-native';
import { IMAGES } from '@src/assets/images';
import { scaleSize, scaleWidth } from '@src/utils/styles/mixins';

interface ImageAppPicProps extends ImageProps {
  mainStyle?: ViewStyle;
}

const MyImage: FC<ImageAppPicProps> = ({ mainStyle, ...args }) => {
  const { uri } = args?.source as ImageURISource;
  const [error, setError] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  const err = useMemo(
    () =>
      typeof args.source === 'number' ? false : error || uri == null || uri?.length <= 0 || typeof uri !== 'string',
    [error, uri, args.source],
  );

  return (
    <Suspense
      fallback={
        <View style={[mainStyle, { position: 'relative' }, args.style]}>
          <View style={styles.container}>
            <Image source={IMAGES.LOADING} style={styles.icon} resizeMode="contain" />
          </View>
        </View>
      }
    >
      <View style={[mainStyle, { overflow: 'hidden' }]}>
        {err ? (
          <Image
            {...args}
            style={[{ borderRadius: 1, width: '100%', height: '100%' }, args.style]}
            source={IMAGES.LOGO_APP}
          />
        ) : (
          <Image
            onError={err => {
              if (err) {
                setError(true);
              }
            }}
            onLoad={() => setLoaded(true)}
            {...args}
            style={[{ borderRadius: 1, width: '100%', height: '100%' }, args.style]}
            source={uri ? { uri: uri?.slice(0, 4) === 'https' ? uri : uri } : args?.source}
            // source={
            //   uri
            //     ? {
            //         uri: uri.slice(0, 4) === 'https' ? uri : `https${uri.slice(4)}`,
            //       }
            //     : args?.source
            // }
          />
        )}
        {!loaded && !err && (
          <View
            style={{
              flex: 1,
              zIndex: 9999,
              justifyContent: 'center',
              alignItems: 'center',
              ...StyleSheet.absoluteFillObject,
              margin: scaleWidth(4),
            }}
          >
            <Image source={IMAGES.LOADING} style={styles.icon} resizeMode="contain" />
          </View>
        )}
      </View>
    </Suspense>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.01)',
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: scaleSize(40),
    width: scaleWidth(40),
  },
});

export default MyImage;
